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