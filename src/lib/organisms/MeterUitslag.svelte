<script>
  import Header from "$lib/molecules/Header.svelte";
  import Herodetailpagina from "$lib/molecules/Herodetailpage.svelte";
  import ResultaatKaart from "$lib/molecules/ResultaatKaart.svelte";
  import BarometerPopup from "$lib/molecules/BarometerPopup.svelte";
  let {data}= $props();
</script>
<Header/>
<Herodetailpagina/>
<ResultaatKaart responses={data.responses}/>
<BarometerPopup/>