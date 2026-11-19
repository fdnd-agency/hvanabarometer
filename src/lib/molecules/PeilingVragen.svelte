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
      />
      Rapportcijfer (1–10)</label
    >
    <label
      ><input type="radio" name="question-1-type" value="agree" /> Eens
      / oneens</label
    >
  </fieldset>
