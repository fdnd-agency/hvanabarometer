<script>
  import { onMount } from "svelte";
  import { addQuestion, removeQuestion, getQuestions } from "$lib/molecules/PeilingVragen.svelte";

  // Draait pas in de browser, als de HTML er staat
  onMount(() => {
    // 1. Variabelen
    const stepper = document.querySelector(".stepper");
    const questionCount = document.querySelector("#question-count");
    const minQuestions = Number(questionCount.min);
    const maxQuestions = Number(questionCount.max);
    const pollTitle = document.querySelector("#poll-title");
    const titleOutput = document.querySelector('output[for="poll-title"]');

    const actions = {
      decrease: () => removeQuestion(),
      increase: addQuestion,
    };

    // 2. Logica
    // Alles tonen wat alleen met JavaScript werkt (aantal vragen, tekenteller)
    stepper.hidden = false;
    titleOutput.hidden = false;

    stepper.addEventListener("click", (event) => {
      const button = event.target.closest('button[type="button"]');
      if (button) actions[button.value]?.(button);
    });

    // Aantal vragen intypen
    questionCount.addEventListener("change", () => {
      const wantedCount = Math.min(Math.max(Number(questionCount.value) || minQuestions, minQuestions), maxQuestions);

      while (getQuestions().length < wantedCount) addQuestion();
      while (getQuestions().length > wantedCount) removeQuestion();
      questionCount.focus();
    });

    // Tekenteller, bijvoorbeeld "12/80"
    pollTitle.addEventListener("input", () => {
      titleOutput.value = `${pollTitle.value.length}/${pollTitle.maxLength}`;
    });
  });
</script>

<p>
  <label for="poll-title">Titel</label>
  <input
    type="text"
    id="poll-title"
    name="poll-title"
    value="Tentamenweek"
    maxlength="80"
    required
  />
  <small
    >De naam van de peiling. Staat bovenaan de pagina op hvana.nl.
    <output hidden for="poll-title">12/80</output></small
  >
</p>

<p>
  <label for="poll-intro">Intro <span>(optioneel)</span></label>
  <textarea
    id="poll-intro"
    name="poll-intro"
    maxlength="280"
    placeholder="Schrijf een korte intro…"
  ></textarea>
  <small
    >Verschijnt onder de titel, boven de vragen. Maximaal 280
    tekens.</small
  >
</p>

<!-- Zonder JavaScript: 5 vaste vragen, lege vragen tellen niet mee.
					 Met JavaScript: de stepper verschijnt en je kiest zelf het aantal. -->
<p class="stepper" hidden>
  <label for="question-count">Aantal vragen</label>
  <button type="button" value="decrease"><img src="/assets/icons/minus.svg" alt="Aantal vragen verlagen" width="24" height="24"></button>
  <input
    type="number"
    id="question-count"
    name="question-count"
    value="5"
    min="1"
    max="10"
  />
  <button type="button" value="increase"><img src="/assets/icons/plus.svg" alt="Aantal vragen verhogen" width="24" height="24"></button>
  <small
    >Een peiling heeft 1 tot 10 vragen. Studenten beantwoorden ze na
    elkaar.</small
  >
</p>

<noscript>
  <p>
    Je kunt maximaal 5 vragen stellen. Laat een vraag leeg als je hem
    niet nodig hebt.
  </p>
</noscript>

<style>
  p {
    display: grid;
    justify-items: start;
    gap: var(--spacing-xs);
  }

  label span {
    font-weight: var(--font-weight);
    color: var(--text-color-muted);
  }

  /* :where() heeft geen specificity, zodat bijvoorbeeld .stepper input dit kan overschrijven */
  :where(input:not([type="radio"], [type="checkbox"]), textarea) {
    inline-size: 100%;
  }

  textarea {
    min-block-size: 6rem;
    resize: vertical;
  }

  small {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--spacing-xs);
    justify-self: stretch;
    color: var(--text-color-muted);
  }


  /* Uit base.css: knoppen zijn minimaal 44px (aanraakpunt) */
  button {
    min-inline-size: var(--target-size);
    min-block-size: var(--target-size);
    color: inherit;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  /* Icoonknoppen: de alt van het <img> is de toegankelijke naam van de knop */
  button img {
    display: block;
    margin-inline: auto;
  }

  /* Geen align-items: center, zo stretchen de knoppen naar de hoogte van het invoerveld */
  .stepper {
    display: flex;
    flex-wrap: wrap;

    label,
    small {
      flex-basis: 100%;
    }

    button {
      border: var(--border-thick);
      border-radius: var(--border-radius);
      background: var(--background-color);

      &:hover {
        border-color: var(--primary-color);
      }
    }

    input {
      inline-size: 5rem;
      text-align: center;
    }

    /* Zonder JavaScript verborgen: display: flex mag hidden niet overschrijven */
    &[hidden] {
      display: none;
    }
  }
</style>
