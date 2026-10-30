<script>
    import NiewsLink from "$lib/atomen/NiewsLink.svelte";
    import VideoLink from "$lib/atomen/VideoLink.svelte";
    import ColumnLink from "$lib/atomen/ColumnLink.svelte";
    import OpinieLink from "$lib/atomen/OpinieLink.svelte";
    import PodcastLink from "$lib/atomen/PodcastLink.svelte";
</script>

<nav>
<ul>
    <NiewsLink />
    <VideoLink />
    <ColumnLink />
    <OpinieLink />
    <PodcastLink />
    </ul>
</nav>

<style>
      nav {   
    @media (min-width: 810px) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  ul {
    list-style: none;
    display: none;
    padding: 0;
    @media (min-width: 1120px) {
      display: flex;
      gap: 15px;
    }
  }
 
</style>