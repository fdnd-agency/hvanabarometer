import { fail } from "@sveltejs/kit";

const headers = { "Content-Type": "application/json" };

const BASE_URL = "https://fdnd-agency.directus.app/items";

export async function load({ fetch }) {
  try {
    const response = await fetch(
      `${BASE_URL}/hvana_barometer_responses?fields=id,score,explanation,submitted_at&sort=-submitted_at`
    );

    console.log("Status:", response.status);

    const result = await response.json();
    console.log("Directus antwoord:", result);

    if (!response.ok) {
      return { responses: [] };
    }

    return { responses: result.data ?? [] };
  } catch (error) {
    console.error("Fout bij laden uitslagen:", error);
    return { responses: [] };
  }
}

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

    // 3. Response opslaan, gekoppeld aan de gebruiker
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
