<script>
  import "../styles/styleguide.css";
</script>

<dialog class="popup" id="popup">
  <div class="popup_inner">
    <button
      type="button"
      class="close_popup"
      commandfor="popup"
      command="close"
    >
     ➜] Sluiten
    </button>

    <h2>Geef je cijfer aan de HvA</h2>

    <form class="HVAmeter-form" action="/?/hvameter" method="POST">
      <fieldset>
        <legend>
          Hoe voel je je vandaag over de HvA? Geef een cijfer van 1 tot 10 en
          licht toe waarom je dit cijfer kiest.
        </legend>

        {#each { length: 10 }, rating}
          <label>
            <input
              type="radio"
              name="rating"
              value={rating + 1}
              required={rating == 0}
            />
            <span>{rating + 1}</span>
          </label>
        {/each}
      </fieldset>

      <input type="hidden" name="userId" value="" />
      <label for="toelichting" class="toelichting-tekst">
        Waarom geef je de HvA vandaag dit cijfer?</label
      >
      <textarea
        id="toelichting"
        class="toelichting_veld"
        name="toelichting"
        maxlength="500"
        placeholder="Vertel kort waarom je voor dit cijfer hebt gekozen..."
      ></textarea>

      <label for="email">
        <span class="hva-email">HvA e-mailadres </span>
        <span class="hva-verplicht">★ verplicht</span>
      </label>
      <input
        id="email"
        class="email_veld"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="Jouw HvA e-mailadres"
        required
      />
      <button type="submit" class="verzend_knop">Verzend</button>
    </form>
  </div>
</dialog>

<style>
  /* -- popup -- */
  .popup {
    width: 22rem;
    max-width: 90%;
    margin: auto;
    padding: 0;
    border: 0;
    background: transparent;
    overflow: visible;
  }

  .popup::backdrop {
    background-color: hsla(0, 0%, 0%, 0.5);
  }

  .popup_inner {
    position: relative;
    box-sizing: border-box;
    max-height: 95vh;
    overflow: auto;
    padding: var(--spacing-xl) var(--spacing-s) var(--spacing-m);
    background: var(--background-color);
    color: var(--text-color-dark);
    border: 2px solid var(--text-color-dark);
    border-radius: 1rem;
    font-family: "Montserrat", sans-serif;

  }

  .close_popup {
    position: absolute;
    top: var(--spacing-s);
    left: var(--spacing-s);
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-color-dark);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
  }

  /* -- titel -- */
  .popup h2 {
    margin-bottom: var(--spacing-s);
    transform: rotate(-3deg);
    transform-origin: left center;
  }

  /* -- formulier -- */
  .HVAmeter-form {
    display: flex;
    flex-direction: column;
  }

  fieldset {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs) 0;
    margin: 0 0 var(--spacing-s);
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: var(--spacing-s);
    font-size: var(--font-size-small);
  }

  fieldset label {
    position: relative;
    flex: 0 0 20%; /*verdeling van de cijfers  */
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  /* radio verbergen maar wel toegankelijk houden */
  fieldset input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  fieldset span {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid var(--text-color-dark);
    border-radius: 50%;
    background: var(--background-color);
    font-weight: 600;
    
    &:hover{
      background-color: var(--primary-color);
      color: var(--text-color-light);
    }
  }

  fieldset input:checked + span {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-color-light);
  }

  fieldset input:focus-visible + span {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* -- labels -- */
  .toelichting-tekst,
  .hva-email {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
  }

  .toelichting-tekst {
    margin-bottom: var(--spacing-xs);
  }

  .hva-verplicht {
    margin-left: var(--spacing-xs);
    color: var(--primary-color);
    font-size: 0.7rem;
    font-weight: 600;
  }

  /* -- velden -- */
  .toelichting_veld,
  .email_veld {
    width: 100%;
    border: 2px solid var(--text-color-dark);
    background-color: var(--background-color);
    font-size: var(--font-size-small);
  }

  .toelichting_veld {
    min-height: 6rem;
    margin-bottom: var(--spacing-s);
    resize: vertical;
  }

  .email_veld {
    margin-top: var(--spacing-xs);
  }

  /* -- knop -- */
  .verzend_knop {
    margin-top: var(--spacing-m);
    padding: var(--spacing-s);
    border: 0;
    border-radius: var(--border-radius);
    background: var(--primary-color);
    color: var(--text-color-light);
    font-weight: var(--font-weight-bold);
    cursor: pointer;

    &:hover{
      background-color: var(--primary-color);
    }
  }
</style>
