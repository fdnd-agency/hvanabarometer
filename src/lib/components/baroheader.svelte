<header class="hva-meter">
  <p>
    <strong>HvA-Meter</strong>
    <data class="score" value="7.2">7.2</data>
    <span class="voting">312 stemmen <span class="today">vandaag</span></span>
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

    .vandaag,
    .question {
      display: none;
    }
    .vote {
      background: none;
      border: none;
      color: white;
      margin-top: 8px;
      margin-left: auto;
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
  }
</style>
