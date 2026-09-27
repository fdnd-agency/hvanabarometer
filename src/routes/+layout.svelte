<script>
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	  <link rel="stylesheet" href="/css/global.css" />

</svelte:head>

{@render children()}
