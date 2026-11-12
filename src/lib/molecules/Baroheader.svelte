<script>
  let { average = null, voteCount = 0 } = $props();
</script>

<header class="hva-meter">
  <p>
    <span class="headertext">
      <strong>HvA-Meter</strong>
      {#if average}
        <data class="score" value={average}>{average}</data>
      {:else}
        <span class="score">*</span>
      {/if}
      <a class="voting" href="/meter-uitslag">{voteCount} stemmen</a>
      <span class="today">vandaag</span>
    </span>
  </p>
  <p class="question">Welk cijfer geef jij je dag?</p>
  <button class="vote" command="show-modal" commandfor="popup">Stem ➔</button>
</header>

<style>
  .hva-meter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-height: 3.5rem;
    padding: 0 1rem;
    background: #1450d2;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    justify-content: space-between;

    p {
      margin: 0;
    }

    a {
      color: white;
    }

    .headertext {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 0.25rem 0.5rem;
      min-width: 0;
    }

    strong {
      font-size: 1rem;
      white-space: nowrap;
    }

    .view,
    .today,
    .question,
    .voting {
      display: none;
    }

    .vote {
      font-size: 0.8rem;
      white-space: nowrap;
      flex-shrink: 0;
      padding: 0.15rem 0.4rem;
      border: none;
      border-radius: 50px;
      background-color: rgb(255, 255, 255);
      color: #1450d2;
      font-weight: 800;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }

      &:focus-visible {
        outline: 2px solid white;
        outline-offset: 3px;
      }
    }

    .score {
      font-size: 1rem;
      font-weight: 900;
    }

    .voting {
      padding: 0.25rem 0.6rem;
      font-size: 0.7rem;
      border: 1.5px solid rgba(255, 255, 255, 0.8);
      border-radius: 50rem;
      color: white;
      white-space: nowrap;
      text-decoration: none;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(138, 222, 255, 0.15);
      }

      &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 3px;
      }
    }

    @media (min-width: 48rem) {
        gap: 1rem;
        padding: 0 2rem;

      strong {
        font-size: 1.375rem;
      }

      .score {
        font-size: 1.875rem;
      }

      .voting {
        display: inline;
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
        gap: 1.25rem;
        min-height: 4rem;

      .score {
        font-size: 1.85rem;
      }

      strong {
        font-size: 1.375rem;
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
