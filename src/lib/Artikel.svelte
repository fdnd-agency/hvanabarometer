<script>
  import ArtikelCard from "$lib/Artikelcard.svelte";
</script>

<section>
  <ul class="articlebox">
    <ArtikelCard />
    <ArtikelCard />
    <ArtikelCard />
  </ul>
  <a class="clickmorebtn" href="#">Meer columns</a>
</section>

<style>
  section {
    background: #ff5a2e;
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
    background: white;
    color: black;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
