<script>
  import PeilingenTabel from "$lib/molecules/PeilingenTabel.svelte";
  let { data } = $props();
</script>

<PeilingenTabel peilingen={data.peilingen} />