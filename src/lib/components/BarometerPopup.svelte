<button type="button" class="hva-meterlink" command="show-modal" commandfor="popup"> 
    <span>HvA-meter</span> 
</button>

<dialog class="popup" id="popup"> 
    <div class="popup_inner"> 
        <button 
        type="button" class="close_popup" commandfor="popup" command="close">
         ← Terug
        </button>

        <h1>Geef je cijfer aan de HvA</h1>

        <form class="HVAmeter-form" action="/HVA-meter" method="POST">
            <!-- bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset -->
            <fieldset>
                <legend>
                    Hoe voel je je vandaag over de HvA? Geef een cijfer van 1
                    tot 10 en licht toe waarom je dit cijfer kiest.
                </legend>

                {#each {length:10}, rating}
                <label>
                    <!-- bron(over verschillende types in een form)https://formgent.com/types-of-forms/ -->
                    <input 
                    type="radio"
                     name="rating" 
                     value="{rating + 1}" 
                     required={ rating == 0}/>
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
            >
            <button type="submit" class="verzend_knop">Verzend</button>
        </form>
    </div>
</dialog>

<style>
/**dit kan later weg als de styleguide is gemergd en nog veel meer van de styling*/
  :root {
        --blue: hsl(219, 94%, 44%);
        --pink: hsl(332, 100%, 77%);
        --teal: hsl(166, 71%, 53%);
        --yellow: hsl(50, 100%, 50%);
        --orange: hsl(13.11, 100%, 59.61%);
        --black: hsl(0, 0%, 0%);
        --white: hsl(0, 0%, 100%);
    }

    .hva-meterlink{
        display:block;
    }

    /* -- popup -- */
    .popup{
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: grid;
        place-items: center;
        padding: 1rem;
        background: hsla(0, 0%, 0%, 0.5); /*zodat de achtergrond donker wordt*/
    }

    .popup_inner {
        position: relative;
        width: 100%;
        max-width: 22rem;
        max-height: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding: 3.5rem 1.25rem 1.5rem;
        background: var(--white);
        color: var(--black);
        border: 2px solid var(--black);
        border-radius: 1rem;
        font-family: system-ui, sans-serif;
    }

     .close_popup {
        position: absolute;
        top: 1.1rem;
        left: 1.25rem;
        color: var(--black);
        font-weight: 700;
        text-decoration: none;
     }

    /* -- titel -- */
     h1 {
        margin: 0 0 1rem;
        font-family: "Arial Black", Impact, sans-serif;
        font-size: 2rem;
        line-height: 1;
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
        gap: 0.75rem 0;
        margin: 0 0 1rem;
        padding: 0;
        border: 0;
    }
 
    legend {
        padding: 0;
        margin-bottom: 1rem;
        font-size: 0.85rem;
        line-height: 1.4;
    }
 
    fieldset label {
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
        border: 2px solid var(--black);
        border-radius: 50%;
        background: var(--white);
        font-weight: 600;
    }

    fieldset input:checked + span {
        background: var(--blue);        
        color: var(--white);
    }

    fieldset input:focus-visible + span {
        outline: 3px solid var(--blue);
        outline-offset: 2px;
    }

     /* -- labels -- */
    .toelichting-tekst,
    .hva-email {
        font-weight: 700;
        font-size: 0.85rem;
    }
 
    .toelichting-tekst {
        margin-bottom: 0.5rem;
    }
 
    .hva-verplicht {
        margin-left: 0.4rem;
        color: var(--blue);
        font-size: 0.7rem;
        font-weight: 600;
    }

    /* -- velden -- */
    .toelichting_veld,
    .email_veld {
        width: 100%;
        box-sizing: border-box;
        padding: 0.75rem;
        border: 2px solid var(--black);
        border-radius: 0.5rem;
        font: inherit;
        font-size: 0.8rem;
    }
 
    .toelichting_veld {
        min-height: 7rem;
        margin-bottom: 1.25rem;
        resize: vertical;
    }
 
    .email_veld {
        margin-top: 0.5rem;
    }

    .toelichting_veld:focus-visible,
    .email_veld:focus-visible {
        outline: 3px solid var(--blue);
        outline-offset: 2px;
    }
 
    /* -- knop -- */
    .verzend_knop {
        margin-top: 1.5rem;
        padding: 1rem;
        border: 0;
        border-radius: 0.3rem;
        background: var(--blue);
        color: var(--white);
        font: inherit;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
    }
   
    .verzend_knop:focus-visible {
        outline: 3px solid var(--black);
        outline-offset: 3px;
    }
</style>