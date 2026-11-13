import { fail } from "@sveltejs/kit";

const BASE_URL = "https://fdnd-agency.directus.app/items";
const headers = { "Content-Type": "application/json" };

export const actions = {
  hvameter: async ({ request, fetch }) => {
    const formData = await request.formData();

    const score = Number(formData.get("rating"));
    const explanation = formData.get("toelichting")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";

    // Validatie
    if (!score || score < 1 || score > 10) {
      return fail(400, { error: "Kies een cijfer van 1 tot 10." });
    }
    if (!email) {
      return fail(400, { error: "Vul je HvA e-mailadres in." });
    }
    if (!email.endsWith("@hva.nl")) {
      return fail(400, {
        error: "Gebruik je HvA e-mailadres (eindigt op @hva.nl).",
      });
    }
    if (explanation.length > 500) {
      return fail(400, {
        error: "Je toelichting mag maximaal 500 tekens zijn.",
      });
    }

    // 1. Gebruiker opzoeken op e-mail
    const userResponse = await fetch(
      `${BASE_URL}/hvana_barometer_users?filter[email][_eq]=${encodeURIComponent(email)}&limit=1`,
    );

    if (!userResponse.ok) {
      console.error(await userResponse.text());
      return fail(500, { error: "Kon gebruiker niet ophalen." });
    }

    const { data: users } = await userResponse.json();
    let user = users?.[0];

    // 2. Bestaat de gebruiker niet? Dan aanmaken
    if (!user) {
      const createUser = await fetch(`${BASE_URL}/hvana_barometer_users`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email }),
      });

      if (!createUser.ok) {
        console.error(await createUser.text());
        return fail(500, { error: "Kon gebruiker niet aanmaken." });
      }

      user = (await createUser.json()).data;
    }

  //3. in deze code kijken we of de gebruiker al heeft gestemd vandaag
  
      //ophalen van de datum van vandaag
  const today = new Intl.DateTimeFormat("en-CA", { //in de format jaar-maand-dag
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date()); //haalt de huidige datum en tijd op
  
  //kijken via userid vanaf vandaag 00.00 of al gestemd is
      const checkResponse = await fetch(
        `${BASE_URL}/hvana_barometer_responses?filter[user][_eq]=${user.id}&filter[submitted_at][_gte]=${today}T00:00:00&limit=1`,
      );
  
      //controleer of get goed is gegaan
      if (!checkResponse.ok) { // als het verzoek niet goed is verlopen dan gebeurt er dit
        return fail(500, {
          error: "Kon eerdere stemmen niet controleren.",
        });
      }
  
      //gegeveens uit directus ophalen
      const { data: responses } = await checkResponse.json();

      
  //kijken of er al een stem bestaat
      if (responses.length > 0) {
        return fail(400, {
          error: "Je hebt vandaag al een stem ingestuurd.",
        });
      }
  

    // 4. Response opslaan, gekoppeld aan de gebruiker
    const response = await fetch(`${BASE_URL}/hvana_barometer_responses`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        score,
        explanation,
        submitted_at: new Date().toISOString(),
        user: user.id,
        user_id: user.id,
      }),
    });

    if (!response.ok) {
      console.error(await response.text());
      return fail(500, { error: "Er ging iets mis bij het versturen." });
    }

    return { success: true };
  },
};
