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
