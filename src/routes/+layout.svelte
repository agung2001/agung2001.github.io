<script>
	import config from '../config.js';
	import {DocTitle} from "../stores/Layout.js";
	let { name } = config;

	/** Welcome Terminal ASCII */
	console.log(`༼ つ ◕_◕ ༽つ Welcome to ${name} profile page`)
</script>

<svelte:head>
	<title>{name}{($DocTitle) ? ` | ${$DocTitle}` : ``}</title>
</svelte:head>

<slot />
