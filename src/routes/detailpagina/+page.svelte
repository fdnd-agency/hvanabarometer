<script>
  import Header from "$lib/components/Header.svelte";
  import ResultaatKaart from "$lib/components/ResultaatKaart.svelte";
  import BarometerPopup from "$lib/components/BarometerPopup.svelte";
  let {data}= $props();
</script>
<Header/>
<ResultaatKaart responses={data.responses}/>
<BarometerPopup/>