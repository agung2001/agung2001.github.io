<script>
	import Links from "./components/Links.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
	import config from "../../config.js";
</script>

<svelte:head>
	<title>{config.name}</title>

	<meta property="og:title" content="{config.name}" />
	<meta name="twitter:title" content="{config.name}">
</svelte:head>

<div class="relative overflow-hidden min-h-screen bg-gray-50">
	<Navigation />

	<img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
	<div class="sm:absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

	<div class="relative sm:mx-auto md:w-5/6 md:py-8">
		<Links />
	</div>
</div>

