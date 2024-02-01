<script>
	import config from '../config.js';
	import {DocTitle} from "../stores/Layout.js";
	import Navigation from "$lib/components/Navigation.svelte";
	let { name } = config;

	/** Welcome Terminal ASCII */
	console.log(`༼ つ ◕_◕ ༽つ Welcome to ${name}`)
</script>

<!-- META TAG -->
<svelte:head>
	<title>{$DocTitle}</title>

	<meta property="og:title" content="{$DocTitle}" />

	<meta name="twitter:title" content="{$DocTitle}">
</svelte:head>

<main>
	<slot />
</main>
