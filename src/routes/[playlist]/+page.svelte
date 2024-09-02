<script>
	import Navigation from "$lib/components/Navigation.svelte";
	import Episode from "./components/Episode.svelte";
	import config from "../../config.js";
	import youtube from "../../youtube.js";
	import {removeEmojisAndSymbols} from "$lib/strings.ts";
	import {slugify} from "$lib/url.ts";
	import {Card} from "flowbite-svelte";
	export let data = {};

	// Get Youtube URL
	const GetYouTubeURL = (url) => {
		let URL = url.replace('https://www.youtube.com/watch?v=','https://www.youtube.com/embed/')
		return URL.replace('https://youtu.be/','https://www.youtube.com/embed/')
	}

	// Playlist
	let playlist = youtube.find((p) => {
		let slug = removeEmojisAndSymbols(p.name).trimStart()
		slug = slugify(slug)
		return data.playlist === slug;
	});
	let video = playlist.videos[0];
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

	<div class="relative sm:mx-auto container md:py-8 ">
		<Card class="max-w-full mb-6">
			<h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{playlist.name}
			</h1>
			<p>
				{playlist.about}
			</p>
			<iframe style="width:100%; min-height:600px;" src="1234{GetYouTubeURL(video.url)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<div class="pt-4 grid sm:grid-rows-1 md:grid-cols-4 gap-2 cursor-pointer">
				{#each playlist.videos as video, number}
					<div on:click={() => { console.log(number) }}>
						<Episode button={{
							label: `Episode ${++number}`,
							caption: video.name,
							icon: 'fa-solid fa-play',
							color: '#393939',
							textColor: '#fff',
							borderColor: '',
							animate: false
						}}
						/>
					</div>
				{/each}
			</div>
		</Card>
	</div>
</div>

