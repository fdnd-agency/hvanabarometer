<script module>
  // Progressive enhancement: zonder JavaScript staan er 5 vragen met 6 opties klaar en verstuur je het formulier gewoon.
  // Met JavaScript ruim je lege vragen op, kies je zelf het aantal en lopen de tekentellers mee.
  // Deze functies staan in <script module>, zodat PeilingInfo (de stepper) ze kan importeren.

  // 1. Variabelen
  const minOptions = 2;
  const maxOptions = 6;
  const renumberedAttributes = ["id", "for", "name"];

  // 3. Functies
  // Het invoerveld "Aantal vragen" staat in PeilingInfo
  function getQuestionCount() {
    return document.querySelector("#question-count");
  }

  export function getQuestions() {
    return document.querySelectorAll(".question");
  }

  // Haalt lege items van achter naar voren weg, maar laat er altijd "minimum" staan
  function removeEmptyItems(getItems, minimum) {
    const itemsFromLast = [...getItems()].reverse();

    itemsFromLast.forEach((item) => {
      const isEmpty = item.querySelector("input").value.trim() === "";
      if (isEmpty && getItems().length > minimum) item.remove();
    });
  }

  // Vervangt een nummer in id, for en name, bijvoorbeeld "question-3" → "question-2"
  function renumberAttributes(element, prefix, number) {
    const pattern = new RegExp(`${prefix}-\\d+`);

    element.querySelectorAll("[id], [for], [name]").forEach((child) => {
      renumberedAttributes.forEach((attribute) => {
        const value = child.getAttribute(attribute);
        if (value) child.setAttribute(attribute, value.replace(pattern, `${prefix}-${number}`));
      });
    });
  }

  function numberQuestion(question, number, total) {
    question.querySelector("legend").textContent = `Vraag ${number} van ${total}`;
    // De alt van het icoon is de toegankelijke naam van de knop
    question.querySelector('[value="remove-question"] img').alt = `Verwijder vraag ${number}`;
    renumberAttributes(question, "question", number);
  }

  function updateQuestions() {
    const questionCount = getQuestionCount();
    const questions = getQuestions();
    const isMinimum = questions.length <= Number(questionCount.min);

    questions.forEach((question, index) => {
      numberQuestion(question, index + 1, questions.length);
      // Met JavaScript is elke zichtbare vraag verplicht, lege zijn toch al weggehaald
      question.querySelector("input").required = true;
      question.querySelector('[value="remove-question"]').disabled = isMinimum;
    });

    // De stepper staat in PeilingInfo
    questionCount.value = questions.length;
    document.querySelector('[value="decrease"]').disabled = isMinimum;
    document.querySelector('[value="increase"]').disabled = questions.length >= Number(questionCount.max);
  }

  function updateOptions(answerOptions) {
    const options = answerOptions.querySelectorAll("p");

    options.forEach((option, index) => {
      const number = index + 1;
      const removeButton = option.querySelector("button");

      option.querySelector("label").textContent = `Optie ${number}`;
      removeButton.querySelector("img").alt = `Verwijder optie ${number}`;
      removeButton.disabled = options.length <= minOptions;
      renumberAttributes(option, "option", number);
    });

    answerOptions.querySelector('[value="add-option"]').disabled = options.length >= maxOptions;
  }

  export function addQuestion() {
    const questions = getQuestions();
    if (questions.length >= Number(getQuestionCount().max)) return;

    const lastQuestion = questions[questions.length - 1];
    const newQuestion = lastQuestion.cloneNode(true);
    const questionInput = newQuestion.querySelector("input");
    const extraOptions = [...newQuestion.querySelectorAll(".answer-options p")].slice(minOptions);

    // Leeg maken en een standaard type kiezen
    newQuestion.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = "";
    });
    newQuestion.querySelector('[value="multiple-choice"]').checked = true;
    newQuestion.querySelector("output").value = `0/${questionInput.maxLength}`;
    extraOptions.forEach((option) => option.remove());

    // Eerst hernummeren, anders delen de radio buttons hun name met de vorige vraag
    numberQuestion(newQuestion, questions.length + 1, questions.length + 1);
    lastQuestion.after(newQuestion);

    updateOptions(newQuestion.querySelector(".answer-options"));
    updateQuestions();
    questionInput.focus();
  }

  export function removeQuestion(question = getQuestions()[getQuestions().length - 1]) {
    if (getQuestions().length <= Number(getQuestionCount().min)) return;

    question.remove();
    updateQuestions();
  }

  function addOption(button) {
    const answerOptions = button.closest(".answer-options");
    const options = answerOptions.querySelectorAll("p");
    if (options.length >= maxOptions) return;

    const lastOption = options[options.length - 1];
    const newOption = lastOption.cloneNode(true);

    newOption.querySelector("input").value = "";
    lastOption.after(newOption);

    updateOptions(answerOptions);
    newOption.querySelector("input").focus();
  }

  function removeOption(button) {
    const answerOptions = button.closest(".answer-options");

    button.closest("p").remove();
    updateOptions(answerOptions);
    // Focus niet kwijtraken nadat de knop is verdwenen
    answerOptions.querySelector('[value="add-option"]').focus();
  }
</script>

<script>
  import { onMount } from "svelte";

  // Zonder JavaScript staan er 5 vragen klaar; de eerste is een voorbeeld en verplicht
  const maxQuestionLength = 120;
  const questions = [
    { text: "Hoe was je tentamenweek?", type: "grade" },
    { text: "", type: "multiple-choice" },
    { text: "", type: "multiple-choice" },
    { text: "", type: "multiple-choice" },
    { text: "", type: "multiple-choice" },
  ];
  const questionTypes = [
    { value: "multiple-choice", label: "Meerkeuze" },
    { value: "grade", label: "Rapportcijfer (1–10)" },
    { value: "agree", label: "Eens / oneens" },
  ];

  // 2. Logica (draait pas in de browser, als de HTML er staat)
  onMount(() => {
    const form = document.querySelector("form");
    const questionCount = getQuestionCount();

    const actions = {
      "remove-question": (button) => {
        removeQuestion(button.closest(".question"));
        questionCount.focus();
      },
      "add-option": addOption,
      "remove-option": removeOption,
    };

    // Alles tonen wat alleen met JavaScript werkt (knoppen, tekentellers)
    form.querySelectorAll(".question [hidden]").forEach((element) => {
      element.hidden = false;
    });

    removeEmptyItems(getQuestions, Number(questionCount.min));

    form.querySelectorAll(".answer-options").forEach((answerOptions) => {
      removeEmptyItems(() => answerOptions.querySelectorAll("p"), minOptions);
      updateOptions(answerOptions);
    });

    updateQuestions();

    form.addEventListener("click", (event) => {
      const button = event.target.closest('.question button[type="button"]');
      if (button) actions[button.value]?.(button);
    });

    // Tekentellers bij de vragen, bijvoorbeeld "24/120"
    form.addEventListener("input", (event) => {
      if (!event.target.closest(".question")) return;
      const output = form.querySelector(`output[for="${event.target.id}"]`);
      if (output) output.value = `${event.target.value.length}/${event.target.maxLength}`;
    });
  });
</script>

{#each questions as question, index}
  {@const number = index + 1}
  <fieldset class="question">
    <legend>Vraag {number} van {questions.length}</legend>
    <button type="button" value="remove-question" hidden><img src="/assets/icons/cross.svg" alt="Verwijder vraag {number}" width="24" height="24" /></button>

    <p>
      <label for="question-{number}-text">Vraag</label>
      <input
        type="text"
        id="question-{number}-text"
        name="question-{number}-text"
        value={question.text}
        maxlength={maxQuestionLength}
        required={number === 1}
      />
      <small
        >Stel één vraag, in de jij-vorm.
        <output hidden for="question-{number}-text">{question.text.length}/{maxQuestionLength}</output></small
      >
    </p>

    <fieldset class="choices">
      <legend>Type</legend>
      {#each questionTypes as type}
        <label
          ><input
            type="radio"
            name="question-{number}-type"
            value={type.value}
            checked={type.value === question.type}
          />
          {type.label}</label
        >
      {/each}
    </fieldset>

    <fieldset class="answer-options">
      <legend>Antwoordopties</legend>
      {#each { length: maxOptions }, optionIndex}
        {@const optionNumber = optionIndex + 1}
        <p>
          <label for="question-{number}-option-{optionNumber}">Optie {optionNumber}</label>
          <input
            type="text"
            id="question-{number}-option-{optionNumber}"
            name="question-{number}-option"
            maxlength="60"
          />
          <button type="button" value="remove-option" hidden><img src="/assets/icons/cross.svg" alt="Verwijder optie {optionNumber}" width="24" height="24" /></button>
        </p>
      {/each}
      <button type="button" value="add-option" hidden>
        + Optie toevoegen
      </button>
      <small
        >2 tot 6 opties, maximaal 60 tekens per optie.<noscript>
          Lege opties tellen niet mee.</noscript
        ></small
      >
    </fieldset>
  </fieldset>
{/each}

<style>
  fieldset {
    display: grid;
    gap: var(--spacing-xs);
    min-inline-size: 0;
    border: 0;
  }

  /* float haalt de legend uit de "rendered legend"-modus, zodat hij een normaal grid item wordt */
  legend {
    float: left;
    font-weight: var(--font-weight-bold);
  }

  p {
    display: grid;
    justify-items: start;
    gap: var(--spacing-xs);
  }

  label {
    font-weight: var(--font-weight-bold);
  }

  input:not([type="radio"], [type="checkbox"]) {
    inline-size: 100%;
  }

  small {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--spacing-xs);
    justify-self: stretch;
    color: var(--text-color-muted);
  }

  /* Vakken met een rand die bij hover blauw wordt: radio-keuzes en verwijderknoppen */
  .choices label,
  button[value^="remove"] {
    border: var(--border);
    border-radius: var(--border-radius);
    background: var(--background-color);

    &:hover {
      border-color: var(--primary-color);
    }
  }

  /* Uit base.css, staat niet in styleguide.css */
  input:not([type="radio"], [type="checkbox"]) {
    border: var(--border);
    background: var(--background-color);

    &:hover {
      border-color: var(--primary-color);
    }
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

  /* Verwijderknoppen tonen alleen het ×, de rand verschijnt pas bij hover */
  button[value^="remove"] {
    border-color: transparent;
  }

  .question {
    position: relative;
    gap: var(--spacing-m);
    padding-block-start: var(--spacing-s);
    border-block-start: var(--border-thick);

    > legend {
      color: var(--primary-color);
      font-size: var(--font-size-small);
      line-height: var(--target-size);
      letter-spacing: var(--letter-spacing-caps);
      text-transform: uppercase;
    }

    > button {
      position: absolute;
      inset-block-start: var(--spacing-s);
      inset-inline-end: 0;
    }

    /* Antwoordopties alleen bij Meerkeuze.
       Progressive enhancement: zonder :has() support blijven ze gewoon zichtbaar */
    &:has([value="multiple-choice"]:not(:checked)) .answer-options {
      display: none;
    }
  }

  .choices {
    label {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      min-block-size: var(--target-size);
      padding-inline: var(--spacing-s);
      font-weight: var(--font-weight);
      white-space: nowrap;
      cursor: pointer;

      &:has(:checked) {
        box-shadow: inset 0 0 0 1px var(--border-color);
      }
    }

    [type="radio"] {
      flex-shrink: 0;
      appearance: none;
      inline-size: var(--control-size);
      block-size: var(--control-size);
      border: 1.5px solid var(--text-color-muted);
      border-radius: 50%;
      /* styleguide.css geeft elke input padding, een radio button niet */
      padding: 0;

      &:checked {
        border: 5px solid var(--primary-color);
      }

      /* De focus komt op het label, omdat dat het klikbare vak is */
      &:focus-visible {
        outline: 0;
      }
    }

    label:has(> [type="radio"]:focus-visible) {
      outline: 3px solid var(--primary-color);
      outline-offset: 2px;
    }
  }

  /* Per optie: label erboven, daaronder invoerveld en verwijderknop naast elkaar */
  .answer-options p {
    grid-template-columns: 1fr auto;
    align-items: center;

    label {
      grid-column: 1 / -1;
    }
  }

  /* + Optie toevoegen ziet eruit als een link */
  [value="add-option"] {
    justify-self: start;
    border: 0;
    background: none;
    color: var(--primary-color);
    font-weight: var(--font-weight-semibold);

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 48em) {
    .choices {
      grid-template-columns: repeat(3, minmax(min-content, 1fr));

      legend {
        grid-column: 1 / -1;
      }
    }
  }
</style>
