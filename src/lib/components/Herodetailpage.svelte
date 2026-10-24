<section>
  <div class="inner">
    <span class="label">Barometer</span>

    <h1>Hoe ervaren studenten de HvA vandaag?</h1>

    <p class="intro">
      Elke dag geven HvA-studenten anoniem een cijfer aan hun dag op de
      hogeschool. Hieronder alle uitslagen op een rij.
    </p>

    <p class="score">
      <span class="number">6,5</span>
      <span class="score-info">gemiddeld cijfer · 10 reacties</span>
    </p>
  </div>
</section>


<style>
    section {
        background: linear-gradient(var(--primary-color));
        color: var(--text-color-light);
        padding: var(--spacing-l) var(--spacing-s);

        @media (min-width: 740px) {
        padding: var(--spacing-xl) 2.5rem;
        }
    }

    .inner {
        display: grid;
        max-width: 1000px;
        margin-inline: auto;

        @media (min-width: 740px) {
        grid-template-columns: 1fr auto;
        column-gap: var(--spacing-xl);
        align-items: center;
        }
    }

    .label,
    .score-info {
        font-family: "U8 Bold web", sans-serif;
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-bold);
    }

    .label {
        text-transform: uppercase;
    }

    h1 {
        max-width: 500px;
        margin: var(--spacing-xs) 0 var(--spacing-s);

        @media (min-width: 740px) {
        font-size: 45px;
        }
    }

    .intro {
        max-width: 500px;
        font-size: var(--font-size-small);
    }

    .score {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: var(--spacing-l);

        @media (min-width: 740px) {
        grid-column: 2;
        grid-row: 1 / 4;
        margin-top: 0;
        }
    }

    .number {
        font-family: "U8 Bold web", sans-serif;
        font-size: 80px;
        line-height: 1.2;

        @media (min-width: 740px) {
        font-size: 100px;
        }
    }
    
</style>