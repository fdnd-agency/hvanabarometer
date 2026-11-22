<script>
  let { children } = $props();
</script>

<div class="dashboard">
  {@render children()}
</div>

<style>
  .dashboard {
    min-height: 100vh;
    /* Blauwe balk bovenaan (305px, zoals in het design), daaronder lichtblauw */
    background: linear-gradient(
      var(--blue) 0 305px,
      var(--light-blue) 305px
    );
  }
</style>
