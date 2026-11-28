<script>
  import RedactieHeader from "$lib/molecules/RedactieHeader.svelte";
  import PeilingInfo from "$lib/molecules/PeilingInfo.svelte";
  import PeilingVragen from "$lib/molecules/PeilingVragen.svelte";
  import PeilingDoelgroep from "$lib/molecules/PeilingDoelgroep.svelte";
  import ToelichtingVragen from "$lib/molecules/ToelichtingVragen.svelte";
  import InplanButton from "$lib/molecules/InplanButton.svelte";
</script>

<main>
  <RedactieHeader />

  <form method="post" action="/redactie/peilingen">
    <PeilingInfo />
    <PeilingVragen />
    <PeilingDoelgroep />
    <ToelichtingVragen />
    <InplanButton />
  </form>
</main>

<style>
  :global(:root) {
    --page-width: 40rem;
    --control-size: 1.125rem;
  }

  main {
    max-inline-size: var(--page-width);
    margin-inline: auto;
    padding: var(--spacing-l) var(--spacing-s) var(--spacing-xl);
  }

  /* styleguide.css geeft alleen p, a en li Montserrat, labels en legends in een fieldset ook */
  form {
    display: grid;
    gap: var(--spacing-m);
  }

  /* Middle layout: alle maten zijn in rem, dus een grotere basis schaalt de hele pagina mee */
  @media (min-width: 48em) {
    :global(html) {
      font-size: 106.25%;
    }

    main {
      padding-inline: var(--spacing-l);
    }
  }

  /* Desktop layout */
  @media (min-width: 64em) {
    :global(:root) {
      --page-width: 52rem;
    }

    :global(html) {
      font-size: 112.5%;
    }
  }
</style>
