<script>
  let { children } = $props();
</script>

<div class="dashboard">
  {@render children()}
</div>

<style>
  .dashboard {
    min-height: 100vh;
    /* Blauwe balk bovenaan, daaronder lichtblauw */
    background: linear-gradient(
      var(--blue) 0 var(--hero-height),
      var(--light-blue) var(--hero-height)
    );
  }
</style>
