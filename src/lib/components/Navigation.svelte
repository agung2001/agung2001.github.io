<script>
	import config from "../../config.js";

	let isMenuOpen = false;
</script>

<nav id="main-nav" class="top-0 px-6 py-4 w-full bg-white border-b border-gray-300 relative z-50">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Logo -->
		<a href="/" class="text-xl">
			😎 <span class="pl-2">{config.name}</span>
		</a>

		<!-- Menu Button for Mobile -->
		<button on:click={() => { isMenuOpen = !isMenuOpen; }} class="md:hidden focus:outline-none">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
			</svg>
		</button>

		<!-- Links -->
		<div class="md:flex md:space-x-6"
			 class:responsive={isMenuOpen}
			 class:divide-y={isMenuOpen}
			 class:hidden={!isMenuOpen}
		>
			<a href="/knowledge">🧠 Knowledge</a>
			<a href="/contribution">🌟 Contribution</a>
			<a href="https://store.agungsundoro.com">🛒 Store</a>
		</div>
	</div>
</nav>
