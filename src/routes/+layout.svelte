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

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
	<img src="img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
	<div class="sm:absolute inset-0 bg-[url(../img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

	<main>
		<slot />
	</main>

</div>

<div class="hidden"></div>

