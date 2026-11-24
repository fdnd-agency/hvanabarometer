<script>
  // Hardcoded tot er een server/database is
  const stats = [
    { label: "Reacties vandaag", value: "307" },
    { label: "Live peilingen", value: "3" },
    { label: "Deze week", value: "1.842" },
    { label: "Barometer gem.", value: "6,8" },
  ];
</script>

<section>
  <h1>Goedemiddag, redactie</h1>
  <p>Wat leeft er vandaag onder studenten en medewerkers?</p>

  <dl>
    {#each stats as stat}
      <div>
        <dt>{stat.label}</dt>
        <dd>{stat.value}</dd>
      </div>
    {/each}
  </dl>
</section>
