<script>
  import PeilingenTabel from "$lib/molecules/PeilingenTabel.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>Dashboard | HVANA redactie</title>
</svelte:head>

<PeilingenTabel peilingen={data.peilingen} />