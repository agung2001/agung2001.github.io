<script>
	import { page } from '$app/stores';
	import config from "../../config.js";
	import youtube from "../../youtube.js";
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu, Badge, Indicator } from 'flowbite-svelte';
	import { slugify } from "$lib/url.ts";
	import {removeEmojisAndSymbols} from "$lib/strings.ts";

	$: activeUrl = $page.url.pathname;

	// Playlist
	let totalVideos = 0;
	let playlist = youtube.map((p) => {
		totalVideos += p.videos.length;
		let slug = removeEmojisAndSymbols(p.name).trimStart()
		slug = slugify(slug)
		return {
			name: p.name,
			slug,
			about: p.about,
			total: p.videos.length,
		}
	})
</script>

<Navbar class="top-0 px-4 w-full bg-white border-b border-gray-300 relative z-50">
	<NavBrand href="/">
		😎
		<span class="pl-2 self-center whitespace-nowrap text-xl dark:text-white">
			 {config.name}
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl} classUl="pr-0" activeClass="text-red-600">
		<NavLi href="https://brain.agungsundoro.com">Knowledge</NavLi>
		<NavLi class="cursor-pointer">
			Content
			<Badge rounded color="red">{totalVideos}</Badge>
		</NavLi>
		<MegaMenu full items={playlist} let:item style="margin:0px;">
			<a data-sveltekit-reload href="/{item.slug}" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 h-full">
				<div class="font-semibold dark:text-white">
					{item.name}
					<Indicator color="red" border size="xl">
						<span class="text-white text-xs font-bold">{item.total}</span>
					</Indicator>
				</div>
				<div class="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">{item.about}</div>
			</a>
		</MegaMenu>
		<NavLi href="/contribution">Contribution</NavLi>
		<NavLi href="https://store.agungsundoro.com">Store</NavLi>
	</NavUl>
</Navbar>
