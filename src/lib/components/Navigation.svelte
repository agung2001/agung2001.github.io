<script>
	import { page } from '$app/stores';
	import config from "../../config.js";
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="top-0 px-4 w-full bg-white border-b border-gray-300 relative z-50">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl dark:text-white">
			😎 {config.name}
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl} classUl="pr-0" activeClass="text-amber-500">
		<NavLi href="https://brain.agungsundoro.com">Knowledge</NavLi>
		<NavLi href="/contribution">Contribution</NavLi>
		<NavLi href="https://store.agungsundoro.com">Store</NavLi>
	</NavUl>
</Navbar>
