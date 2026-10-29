<script>
  import NavHeader from "$lib/molecules/NavHeader.svelte";
  import HvanaLogo from "$lib/atomen/HvanaLogo.svelte";
    import SocialLinks from "$lib/molecules/SocialLinks.svelte";
</script>
<header>
<NavHeader/>
<HvanaLogo/>
<SocialLinks/>
</header>

<style>
  
  header {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 10;
    background-color: var(--background-color);
    padding: 10px 20px;
    @media (min-width: 810px) {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      padding: 10px 40px;
    }
  }

</style>