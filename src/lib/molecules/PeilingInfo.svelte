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
