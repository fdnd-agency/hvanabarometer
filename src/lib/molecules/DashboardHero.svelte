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

<style>
  section {
    --stat-border: 1px solid hsl(220, 30%, 92%);
    --stat-label-color: hsl(220, 10%, 35%);
    --stat-padding: var(--spacing-s);

    padding: var(--spacing-m) var(--spacing-s) 0;
    color: var(--text-color-light);

    h1 {
      margin: 0 0 var(--spacing-xs);
      font-family: var(--font-heading);
      font-size: var(--font-size-h3);
      line-height: var(--line-height-heading);
    }

    p {
      margin: 0;
      font-size: var(--font-size-small);
    }

    dl {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: var(--spacing-m) 0 0;
      color: var(--text-color-dark);
      background-color: var(--white);
      border-radius: 0.6rem;
      box-shadow: 0 0.5rem 1.5rem hsl(220, 60%, 30%, 0.12);
    }

    div {
      padding: var(--stat-padding);
    }

    /* Lijnen tussen de vakken: rechts van de linker kolom, onder de bovenste rij */
    div:nth-child(odd) {
      border-inline-end: var(--stat-border);
    }

    div:nth-child(-n + 2) {
      border-block-end: var(--stat-border);
    }

    dt {
      font-family: "Montserrat", sans-serif;
      font-size: 0.65rem;
      font-weight: var(--font-weight-bold);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--stat-label-color);
    }

    dd {
      margin: var(--spacing-xs) 0 0;
      font-family: var(--font-heading);
      font-size: var(--font-size-h2);
      line-height: 1;
    }

    div:first-child dd {
      color: var(--primary-color);
    }

    @media (min-width: 48em) {
      --stat-padding: var(--spacing-m);

      padding-inline: var(--spacing-m);

      h1 {
        font-size: var(--font-size-h2);
      }

      dl {
        margin-top: var(--spacing-l);
      }

      dd {
        font-size: var(--font-size-h1);
      }
    }

    @media (min-width: 64em) {
      --stat-padding: var(--spacing-l);

      padding: var(--spacing-xl) var(--spacing-l) 0;

      h1 {
        font-size: var(--font-size-h1);
      }

      dl {
        grid-template-columns: repeat(4, 1fr);
      }

      /* Op desktop één rij: alleen lijnen tussen de vakken */
      div:nth-child(-n + 2) {
        border-block-end: none;
      }

      div:not(:last-child) {
        border-inline-end: var(--stat-border);
      }
    }
  }
</style>
