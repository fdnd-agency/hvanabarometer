// TIJDELIJK: statische data tot dat de we directus voor peilingen hebben!
const peilingen = [
  { id: 1, vraag: "Hoe was je dag op de HvA? (HvA-barometer)", type: "Rapportcijfer", doelgroep: "Studenten", totaal: 143 },
  { id: 2, vraag: "Hoe vind je het aanbod van studentenhuisvesting in Amsterdam?", type: "Meerkeuze", doelgroep: "Studenten", totaal: 120 },
  { id: 3, vraag: "Ik ervaar op dit moment een hoge werkdruk.", type: "Eens / oneens", doelgroep: "Medewerkers", totaal: 486 },
  { id: 4, vraag: "Hoe was je tentamenweek?", type: "Rapportcijfer", doelgroep: "Studenten", totaal: 0 },
  { id: 5, vraag: "Wat vind je van het eten in de kantine?", type: "Meerkeuze", doelgroep: "Iedereen", totaal: 0 },
  { id: 6, vraag: "Heb je genoeg contacturen met je docenten?", type: "Meerkeuze", doelgroep: "Studenten", totaal: 201 },
];

export async function load() {
  return { peilingen };
}
