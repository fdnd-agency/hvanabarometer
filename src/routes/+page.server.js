import { fail } from "@sveltejs/kit";

// Basis-URL van de Directus API en standaard headers voor POST-requests
const BASE_URL = "https://fdnd-agency.directus.app/items";
const headers = { "Content-Type": "application/json" };

// LOAD: haalt de scores op en berekent het gemiddelde voor de barometer-header
export async function load({ fetch }) {
  try {
    // Alle scores ophalen (alleen het veld 'score', max 1000 items)
    const response = await fetch(
      `${BASE_URL}/hvana_barometer_responses?fields=score&limit=1000`,
    );

    // Directus reageert, maar met een foutcode (bijv. 403 of 500)
    if (!response.ok) {
      console.error(await response.text());
      return { average: null, voteCount: 0 };
    }

    const { data: votes } = await response.json();

    // Alle scores bij elkaar optellen
    const total = votes.reduce((sum, vote) => sum + vote.score, 0);

    // Gemiddelde berekenen en afronden op 1 decimaal (null als er geen stemmen zijn)
    const average = votes.length ? (total / votes.length).toFixed(1) : null;

    return {
      average,
      voteCount: votes.length,
    };
  } catch (error) {
    // Netwerkfout: Directus is onbereikbaar, dus fallback teruggeven in plaats van een 500-pagina
    console.error(error);
    return { average: null, voteCount: 0 };
  }
}

// ACTIONS: verwerkt het stemformulier
export const actions = {
  hvameter: async ({ request, fetch }) => {
    const formData = await request.formData();

    // Formulierdata ophalen en opschonen
    const score = Number(formData.get("rating"));
    const explanation = formData.get("toelichting")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";

    // Validatie: cijfer moet tussen 1 en 10 liggen
    if (!score || score < 1 || score > 10) {
      return fail(400, { error: "Kies een cijfer van 1 tot 10." });
    }

    // Validatie: e-mail moet ingevuld zijn
    if (!email) {
      return fail(400, { error: "Vul je HvA e-mailadres in." });
    }

    // Validatie: alleen HvA e-mailadressen toegestaan
    if (!email.endsWith("@hva.nl")) {
      return fail(400, {
        error: "Gebruik je HvA e-mailadres (eindigt op @hva.nl).",
      });
    }

    // Validatie: toelichting mag niet te lang zijn
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

    // 3. Stem opslaan, gekoppeld aan de gebruiker
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
