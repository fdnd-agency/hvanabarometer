<script>
  let { peilingen = [] } = $props();

  const formatTotal = (n) => (n ? n.toLocaleString("nl-NL") : "–");
</script>

<section>
  <header>
    <h2>Alle peilingen</h2>
    <a class="add-button" href="/redactie/peilingen/nieuw">+ Nieuwe peiling</a>
  </header>


  <table>
    <thead>
       <tr>
        <th scope="col">Vraag</th>
        <th scope="col" class="type">Type</th>
        <th scope="col" class="audience">Doelgroep</th>
        <th scope="col" class="total">Totaal</th>          <th scope="col" class="actions">Acties</th>
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
              <a class="form-link" href="/redactie/peilingen/{peiling.id}">Formulier</a>
              <form method="POST" action="?/verwijder">
                <input type="hidden" name="id" value={peiling.id} />
                <button type="submit" class="delete">Verwijder</button>
              </form>
            </td>

          </tr>
        {/each}
      </tbody>
    </table>

</section>

<style>
  section {
    width: 100%;
    max-width: var(--content-width);
    margin-inline: auto;
    padding-inline: var(--spacing-s);
    padding-block: var(--hero-height) var(--spacing-l);  /* voor nu tijdelijk */
  }

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-s);
    margin-bottom: var(--spacing-s);
  }

  .add-button {
    padding: var(--spacing-s) var(--spacing-m);
    border-radius: var(--border-radius-m);
    background: var(--primary-color);
    color: var(--text-color-light);
    font-weight: var(--font-weight-bold);
    
    &:hover {
        background: color-mix(in hsl, var(--primary-color), black 20%);
        text-decoration: none;
      }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: var(--border-radius-l);
    background: var(--white);
    font-family: var(--font-family);
    font-size: var(--font-size-small);
  }

  th,
  td {
    padding: var(--spacing-xs);
    text-align: left;
  }

  th {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-color-muted);
  }

  tbody tr {
    position: relative; 
    
    td {
       border-top: 1px solid var(--border-color-light);
    }

    &:hover td {
      background: var(--light-blue);
    }

    &:last-child td:first-child {
      border-end-start-radius: var(--border-radius-l);
    }

    &:last-child td:last-child {
      border-end-end-radius: var(--border-radius-l);
    }
  }
  
 .question a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    overflow-wrap: anywhere;


    /* alles klikbaar */
    &::after {
      content: "";
      position: absolute;
      inset: 0;
    }

    &:hover {
        text-decoration: none;
      }

      &:focus-visible {
        outline: none;
      }

      &:focus-visible::after {
        outline: 3px solid var(--primary-color);
        outline-offset: -3px;
      }
    }

  /* Mobile */
  .type,
  .audience,
  .form-link {
    display: none;
  }

  td.type,
  td.audience {
    color: var(--text-color-muted);
  }

  .total {
    text-align: right;
    font-weight: var(--font-weight-bold);
  }

 .actions {
    position: relative;
    z-index: 1; /* boven de stretched link */
    text-align: right;

    a {
      font-size: inherit;
      font-weight: var(--font-weight-bold);
    }
  }

  .delete {
      padding: var(--spacing-xs) 0;
      border: none;
      background: none;
      font-size: inherit;
      font-weight: var(--font-weight-bold);
      color: var(--danger-color);
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--danger-color-hover);
      }

      &:focus-visible {
        outline-color: var(--danger-color);
      }
    }


  @media (min-width: 48em) {
    th,
    td {
      padding: var(--spacing-s);
    }

    .actions {
      white-space: nowrap;

      form {
        margin-inline-start: var(--spacing-s);
      }
    }

    .type {
       display: table-cell;
    }

    .form-link {
       display: inline;
     }
  }  

 
  /* Desktop */
  @media (min-width: 64em) {
    th,
    td {
      padding: var(--spacing-s) var(--spacing-m);
    }

    .audience {
      display: table-cell;
    }
  }


</style>
