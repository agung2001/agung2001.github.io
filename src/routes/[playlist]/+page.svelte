<script>
	import Navigation from "$lib/components/Navigation.svelte";
	import Episode from "./components/Episode.svelte";
	import config from "../../config.js";
	import youtube from "../../youtube.js";
	import {SlugifyandNormalizeName} from "$lib/strings.ts";
	import {Card} from "flowbite-svelte";
	import RelatedPlaylist from "./components/RelatedPlaylist.svelte";
	export let data = {};

	// Get Youtube URL
	const GetYouTubeURL = (url) => {
		let URL = url.replace('https://www.youtube.com/watch?v=','https://www.youtube.com/embed/')
		return URL.replace('https://youtu.be/','https://www.youtube.com/embed/')
	}

	// Playlist
	let playlist = youtube.find((p) => {
		let slug = SlugifyandNormalizeName(p.name)
		return data.playlist === slug;
	});
	$: video = playlist.videos[0]

	// Related Playlist
	let related = youtube.filter((p) => {
		let slug = SlugifyandNormalizeName(p.name)
		if (data.playlist === slug) return false;

		// If first word of data.playlist is in slug
		let firstWord = data.playlist.split('-')[0];
		if (slug.includes(firstWord)) return true;
	});
</script>

<svelte:head>
	<title>{config.name}</title>

	<meta property="og:title" content="{config.name}" />
	<meta name="twitter:title" content="{config.name}">

	<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6610c1e31494610019440151&product=sop' async='async'></script>
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
			<iframe id="youtube-iframe" src="{GetYouTubeURL(video.url)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<div class="pt-4 grid sm:grid-rows-1 md:grid-cols-4 gap-2 cursor-pointer">
				{#each playlist.videos as playlist_video, number}
					<div on:click={() => {
						video = playlist.videos[number]
					}}>
						<Episode button={{
							label: `Episode ${number+1}`,
							caption: playlist_video.name,
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

			{#if related.length > 0}
				<h2 class="pt-8 pb-4 text-center text-2xl font-semibold">Related Playlist</h2>
				<div class="grid sm:grid-rows-1 md:grid-cols-4 gap-2 cursor-pointer">
					{#each related as playlist}
						<RelatedPlaylist button={{
							label: playlist.name,
							caption: playlist.about,
							link: SlugifyandNormalizeName(playlist.name),
							animate: false
						}} />
					{/each}
				</div>
			{/if}

			<h2 class="pt-8 text-center text-2xl font-semibold">Sharing is caring, help me spread the knowledge!</h2>
			<div class="123sharethis-inline-share-buttons py-4"></div>
		</Card>
	</div>
</div>

<style>
	#youtube-iframe {
		padding-top: .25rem;
		aspect-ratio: 16 / 9;
		width: 100% !important;
	}
</style>
