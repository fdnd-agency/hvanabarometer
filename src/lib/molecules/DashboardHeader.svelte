<script>
  import { page } from "$app/state";

  let { userName = "Paul" } = $props();

  const dashboardUrl = "/redactie/dashboard";
</script>

<header>
  <nav>
    <a href={dashboardUrl}>
      <img
        src="https://hvana.nl/wp-content/uploads/2023/03/hvana_logo_wit-2025.svg"
        alt="HvanA"
        width="667"
        height="202"
      />
      Redactie
    </a>

    <ul>
      <li>
        <a
          href={dashboardUrl}
          aria-current={page.url.pathname === dashboardUrl ? "page" : undefined}
        >
          Peilingen
        </a>
      </li>
    </ul>

    <p>
      <span>{userName}</span>
      <a href="/">Uitloggen</a>
    </p>
  </nav>
</header>

<style>
  header {
    --header-padding-inline: 1.25rem;

    padding-inline: var(--header-padding-inline);
    font-family: var(--font-heading);
    color: var(--text-color-light);
    background-color: var(--blue);

    nav {
      display: flex;
      align-items: center;
      gap: var(--spacing-s);
      min-height: 4rem;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
      min-height: 1.5rem;
      /* Overschrijft de globale a-styling, zodat links even groot zijn als de tekst ernaast */
      font: inherit;
      color: inherit;
      text-decoration: none;
      text-underline-offset: 0.3em;

      &:hover,
      &[aria-current="page"] {
        text-decoration: underline;
      }

      &:focus-visible {
        outline: 2px solid var(--text-color-light);
        outline-offset: 4px;
      }
    }

    nav > a {
      font-size: var(--font-size-small);
    }

    img {
      width: auto;
      height: 1.375rem;
    }

    ul {
      margin: 0 auto 0 0;
      padding: 0;
      list-style: none;
    }

    nav p {
      display: flex;
      align-items: center;
      gap: var(--spacing-s);
      margin: 0;
    }

    li,
    nav p {
      font-family: inherit;
      font-size: var(--font-size-small);
    }

    /* De naam van de gebruiker staat in het design alleen op grotere schermen */
    span {
      display: none;
    }

    @media (min-width: 48em) {
      --header-padding-inline: var(--spacing-l);

      nav {
        gap: var(--spacing-l);
        min-height: 4.5rem;
      }

      img {
        height: var(--spacing-m);
      }

      span {
        display: inline;
      }
    }

    @media (min-width: 64em) {
      --header-padding-inline: var(--spacing-xl);
    }
  }
</style>
