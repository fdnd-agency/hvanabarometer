<a href="#popup">
    <span>HvA-meter</span>
</a>

<div class="popup" id="popup">
    <div class="popup_inner">
        <h1>Geef je cijfer aan de HvA</h1>

        <form class="HVAmeter-form" action="/HVA-meter" method="POST">
            <!-- bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset -->
            <fieldset>
                <legend>
                    Hoe voel je je vandaag over de HvA? Geef een cijfer van 1
                    tot 10 en licht toe waarom je dit cijfer kiest.
                </legend>
                <label>
                    <!-- bron(over verschillende types in een form)https://formgent.com/types-of-forms/ -->
                    <input type="radio" name="rating" value="1" required/>
                    <span>1</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="2" />
                    <span>2</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="3" />
                    <span>3</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="4" />
                    <span>4</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="5" />
                    <span>5</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="6" />
                    <span>6</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="7" />
                    <span>7</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="8" />
                    <span>8</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="9" />
                    <span>9</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="10" />
                    <span>10</span>
                </label>
            </fieldset>

            <input type="hidden" name="userId" value="" />
            <label class="toelichting-tekst">
                Waarom geef je de HvA vandaag dit cijfer?</label
            >
            <textarea
                class="toelichting_veld"
                name="toelichting"
                maxlength="500"
                placeholder="Vertel kort waarom je voor dit cijfer hebt gekozen..."
            ></textarea>

            <!-- required bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required -->
            <label>
                <span class="hva-email">HvA e-mailadres </span>
                <span class="hva-verplicht">★ verplicht</span>
            </label>
            <input
                class="email_veld"
                name="email"
                type="email"
                placeholder="Jouw HvA e-mailadres"
                required
            >

            <button type="submit" class="verzend_knop">Verzend</button>
        </form>
        <a href="#WONTDO" class="close_popup"
            >← Terug</a
        >
    </div>
</div>
