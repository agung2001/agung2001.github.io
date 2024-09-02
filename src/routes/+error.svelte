<script>
	import {page} from '$app/stores';
	import config from '../config.js';
	let { name } = config;
	import Navigation from "$lib/components/Navigation.svelte";

	/** Welcome Terminal ASCII */
	console.log(`༼ つ ◕_◕ ༽つ Welcome to ${name}`)
</script>

<div class="relative overflow-hidden min-h-screen flex flex-col justify-between bg-white">
	<Navigation/>

	<section id="primary-content" class="bg-animated-rectangle w-full px-6 antialiased">

		<ul class="circles hidden md:block lg:block z-1">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

		<div class="mx-auto max-w-7xl relative z-10">
			<div class="container max-w-lg px-4 sm:py-12 md:py-12 lg:py-32 text-left md:max-w-none md:text-center flex flex-wrap overflow-hidden">
				<div class="py-12 md:py-0 w-full overflow-hidden md:order-last md:my-2 md:px-2 md:w-1/2">
					<img src="/img/error.jpeg" alt="Error">
				</div>
				<div class="sm:py-24  w-full overflow-hidden md:my-2 md:px-2 md:w-1/2">
					<h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:leading-none md:text-6xl lg:text-7xl">
						{$page.error.message}, Sorry for the inconvenience
					</h1>
					<div class="mt-5 text-left text-gray-500 md:mt-12 md:max-w-lg lg:text-lg">
						Go to the homepage or check our latest new content.
					</div>
				</div>
			</div>
		</div>

	</section>
</div>
