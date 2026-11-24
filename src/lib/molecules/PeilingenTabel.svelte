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

<style>
  section {
    width: 90%;
    margin-inline: auto;
    padding-block: 305px var(--spacing-l);  /* voor nu tijdelijk */
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-s);
    margin-bottom: var(--spacing-s);
  }

  .add-button {
    padding: 0.5rem;
    border-radius: 8px;
    background: var(--primary-color);
    color: var(--text-color-light);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
  }

  .table-wrap {
    background: white;
    border-radius: 12px;
    overflow: hidden;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: var(--spacing-s);
    text-align: left;
  }

  tbody tr {
    position: relative; 
    border-top: 1px solid var(--light-blue);
  }

  tbody tr:hover {
    background: var(--light-blue);
  }

  th {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #585d6b;
  }

  /* Mobile */
  .type,
  .audience,
  .actions {
    display: none;
  }

  .total {
    text-align: right;
    font-weight: var(--font-weight-bold);
  }

  th.total {
    font-weight: var(--font-weight-bold);
  }

  .question a {
    color: inherit;
    text-decoration: none;
  }

  /* alles klikbaar */
  .question a::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  .question a:focus-visible {
    outline: none;
  }

  .question a:focus-visible::after {
    outline: 3px solid var(--primary-color);
    outline-offset: -3px;
  }

  /* Desktop */
  @media (min-width: 740px) {
    th,
    td {
      padding: var(--spacing-s) var(--spacing-m, 1.5rem);
    }

    .type,
    .audience,
    .actions {
      display: table-cell;
    }

    td.type,
    td.audience {
      color: #585d6b;
    }

    .actions {
      text-align: right;
    }

    .actions-inner {
      display: flex;
      justify-content: flex-end;
      gap: var(--spacing-s);
      position: relative;
      z-index: 1;
    }

    .actions a {
      color: var(--primary-color);
      font-weight: var(--font-weight-bold);
    }

    .delete {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      font-weight: var(--font-weight-bold);
      color: rgba(209, 13, 13, 0.646);
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
