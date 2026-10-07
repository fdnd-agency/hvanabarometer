<script>
  import Artikel from "$lib/components/Artikel.svelte";
  import Header from "$lib/components/Header.svelte";
  import Baroheader from "$lib/components/Baroheader.svelte";
  import BlauweArtikel from "$lib/components/BlauweArtikel.svelte";
</script>

<Header />
<Baroheader />
<BlauweArtikel />
<Artikel
  background="var(--white)"
  buttonColor="var(--primary-color)"
  buttonTextColor="var(--white)"
  cardShadow="6px 6px 0 #999"
  articles={[
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1790846972/geen-boek-aangeraakt/geen-boek-aangeraakt.jpg?_i=AA",
      alt: "Moesha Codfried",
      title:
        "Teksten lezen voor je studie? ‘Ik denk vaak: skippen die handel’ ",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1772632339/Disco_draait_door_tekst_goed_2_wsdjms/Disco_draait_door_tekst_goed_2_wsdjms.jpg?_i=AA",
      alt: "Paul Disco",
      title: "Disco Draait Door – over verplichte aanwezigheid",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1716889994/ysbreker/ysbreker.jpg?_i=AA",
      alt: "Basia Elting",
      title:
        "Studentenkorting in Amsterdam: van gratis sporten tot film onder...",
    },
  ]}
/>
<Artikel
  buttonTextColor="var(--black)"
  articles={[
    {
      src: "https://res.cloudinary.com/hvana/images/w_2560,h_1703,c_scale/f_auto,q_auto/v1788858898/aynurheader_igkzbo/aynurheader_igkzbo.jpg?_i=AA",
      alt: "Aynur Can",
      title: "‘Studenten evalueren het onderwijs continu, maar dan onderling’",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1789470425/Suzanne_Okkes_kleiner/Suzanne_Okkes_kleiner.jpg?_i=AA",
      alt: "Christa Romp",
      title:
        "‘Ik zal als docent altijd het gesprek aangaan over lhbti-rechten..’",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1788782721/Jacob_Eikelboom_2627/Jacob_Eikelboom_2627.jpg?_i=AA",
      alt: "Jacob Eikelboom",
      title: "‘We kregen een cursus over de leefwereld van de huidige student’",
    },
  ]}
/>
<Artikel
  background="var(--white) "
  buttonColor="var(--primary-color)"
  buttonTextColor="var(--white)"
  cardShadow="6px 6px 0 #999"
  articles={[
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1790846972/geen-boek-aangeraakt/geen-boek-aangeraakt.jpg?_i=AA",
      alt: "Moesha Codfried",
      title:
        "Teksten lezen voor je studie? ‘Ik denk vaak: skippen die handel’ ",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1790772445/YYoutube-Thumnail-2026/YYoutube-Thumnail-2026.jpg?_i=AA",
      alt: "Tessel Bruns",
      title:
        "HvA op Rapport – week 5: ‘Alles in het Engels, dat is even wennen’",
    },
    {
      src: "https://res.cloudinary.com/hvana/images/f_auto,q_auto/v1790589909/Ams-jongen/Ams-jongen.jpg?_i=AA",
      alt: "Jens van der Tak",
      title: "‘Amsterdam is niet mijn stad, veel te groot en toeristisch’",
    },
  ]}
/>
