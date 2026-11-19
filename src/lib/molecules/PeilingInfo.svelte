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
