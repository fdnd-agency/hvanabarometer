<script>
  let { children } = $props();
</script>

<div class="dashboard">
  {@render children()}
</div>

<style>
  .dashboard {
    --hero-height: 305px;
    --content-width: 70rem;

    min-height: 100vh;
    /* Blauwe balk bovenaan, daaronder lichtblauw */
    background: linear-gradient(
      var(--blue) 0 var(--hero-height),
      var(--light-blue) var(--hero-height)
    );
  }
</style>
