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
