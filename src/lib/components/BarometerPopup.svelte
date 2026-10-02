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
