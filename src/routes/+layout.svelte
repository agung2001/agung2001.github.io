<script>
	import { ThemeMode } from "../stores/Layout.js";
	import config from '../config.js';
	let { name } = config;

	ThemeMode.set("light");

	/** Welcome Terminal ASCII */
	console.log(`༼ つ ◕_◕ ༽つ Welcome to ${name}`)
</script>

<main class="{$ThemeMode}">
	<slot />
</main>
