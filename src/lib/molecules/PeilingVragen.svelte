<fieldset class="question">
  <legend>Vraag 1 van 5</legend>
  <button type="button" value="remove-question" hidden><img src="/assets/icons/cross.svg" alt="Verwijder vraag 1" width="24" height="24"></button>

  <p>
    <label for="question-1-text">Vraag</label>
    <input
      type="text"
      id="question-1-text"
      name="question-1-text"
      value="Hoe was je tentamenweek?"
      maxlength="120"
      required
    />
    <small
      >Stel één vraag, in de jij-vorm.
      <output hidden for="question-1-text">24/120</output></small
    >
  </p>

  <fieldset class="choices">
    <legend>Type</legend>
    <label
      ><input
        type="radio"
        name="question-1-type"
        value="multiple-choice"
      />
      Meerkeuze</label
    >
    <label
      ><input
        type="radio"
        name="question-1-type"
        value="grade"
        checked
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
