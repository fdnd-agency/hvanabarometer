<script>
  import ArtikelCard from "$lib/components/ArtikelCard.svelte";
  let {
    background = "#ff5a2e",
    buttonColor = "white",
    buttonTextColor = "white",
    cardShadow = "6px 6px 0 #c9431f",
    articles = [],
  } = $props();
</script>

<section
  style="--bg: {background}; --btn-bg: {buttonColor}; --btn-color: {buttonTextColor}; --card-shadow: {cardShadow}"
>
  <ul class="articlebox">
    {#each articles as article}
      <li><ArtikelCard {...article} /></li>
    {/each}
  </ul>
  <a class="clickmorebtn" href="#WONTDO">Meer columns</a>
</section>

<style>
  .articlebox li {
    flex: 1;
    max-width: 400px;
  }
  section {
    background: var(--bg);
    padding-bottom: 3rem;
  }
  .articlebox {
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }
  .clickmorebtn {
    display: block;
    width: fit-content;
    margin: 0 auto;
    padding: 16px 40px;
    background: var(--btn-bg);
    color: var(--btn-color);
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
