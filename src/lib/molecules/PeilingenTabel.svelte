<script>
  let { peilingen = [] } = $props();

  const formatTotal = (n) => (n ? n.toLocaleString("nl-NL") : "–");
</script>

<section>
    <div class="heading">
    <h2>Alle peilingen</h2>
    <a class="add-button" href="/redactie/peilingen/nieuw">+ Nieuwe peiling</a>
  </div>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th scope="col">Vraag</th>
          <th scope="col" class="type">Type</th>
          <th scope="col" class="audience">Doelgroep</th>
          <th scope="col" class="total">Totaal</th>
          <th scope="col" class="actions">Acties</th>
        </tr>
      </thead>

      <tbody>
        {#each peilingen as peiling (peiling.id)}
          <tr>
            <td class="question">
              <a href="/redactie/peilingen/{peiling.id}">{peiling.vraag}</a>
            </td>

            <td class="type">{peiling.type}</td>
            <td class="audience">{peiling.doelgroep}</td>
            <td class="total">{formatTotal(peiling.totaal)}</td>
            <td class="actions">

              <div class="actions-inner">
                <a href="/redactie/peilingen/{peiling.id}">Formulier</a>
                
                <form method="POST" action="?/verwijder">
                  <input type="hidden" name="id" value={peiling.id} />
                  <button type="submit" class="delete">Verwijder</button>
                </form>

              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
