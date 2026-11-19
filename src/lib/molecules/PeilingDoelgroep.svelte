<fieldset class="choices">
  <legend>Doelgroep</legend>
  <label
    ><input
      type="radio"
      name="audience"
      value="students"
      checked
      required
    />
    Studenten</label
  >
  <label
    ><input type="radio" name="audience" value="employees" />
    Medewerkers</label
  >
  <label
    ><input type="radio" name="audience" value="everyone" />
    Iedereen</label
  >
  <small
    >We herkennen de groep aan het HvA-mailadres: voornaam.achternaam@
    is student, voorletter.achternaam@ is medewerker.</small
  >
</fieldset>

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

  small {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--spacing-xs);
    justify-self: stretch;
    color: var(--text-color-muted);
  }

  .choices {
    label {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      min-block-size: var(--target-size);
      padding-inline: var(--spacing-s);
      border: var(--border);
      border-radius: var(--border-radius);
      background: var(--background-color);
      font-weight: var(--font-weight);
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        border-color: var(--primary-color);
      }

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
