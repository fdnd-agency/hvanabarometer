<header class="hva-meter">
  <p>
    <span class="headertext">
      <strong>HvA-Meter</strong>
      <data class="score" value="7.2">7.2</data>
      <span class="voting">312 stemmen <span class="today">vandaag</span></span>
    </span>
  </p>
  <p class="question">Welk cijfer geef jij je dag?</p>
  <button class="vote">Stem › </button>
</header>

<style>
  .hva-meter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 3.5rem;
    padding: 0 1rem;
    background: #1450d2;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    justify-content: space-between;

    .headertext {
      display: flex;
      margin: 0;
      align-items: center;
      gap: 1rem;
    }
    strong {
      font-size: 1.25rem;
    }
    .today,
    .question {
      display: none;
    }
    .vote {
      background: none;
      border: none;
      color: white;
      margin-top: 8px;
      padding-bottom: 2px;
      border-bottom: 3px solid #ff7a3d;
      font-weight: 800;
      text-transform: uppercase;
    }

    .score {
      font-size: 1.625rem;
      font-weight: 900;
    }

    .voting {
      padding-left: 0.75rem;
      border-left: 1px solid rgba(255, 255, 255, 0.4);
    }

    @media (min-width: 48rem) {
      .hva-meter {
        gap: 1rem;
        padding: 0 2rem;
      }
      strong {
        font-size: 1.375rem;
      }

      .score {
        font-size: 1.875rem;
      }

      .voting {
        padding-left: 1rem;
        font-size: 1.0625rem;
      }

      .today {
        display: inline;
      }

      .vote {
        font-size: 1.125rem;
      }
    }

    @media (min-width: 64rem) {
      .hva-meter {
        gap: 1.25rem;
        height: 4rem;
      }

      .score {
        font-size: 2.125rem;
      }

      strong {
        font-size: 1.375rem;
      }
      .voting {
        padding-left: 1.25rem;
        font-size: 1.125rem;
      }

      .question {
        display: inline;
        margin-left: auto;
        font-size: 1.125rem;
      }

      .vote {
        margin-left: 1.75rem;
      }
    }
  }
</style>
