<script>
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
  import "$lib/styles/styleguide.css";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
