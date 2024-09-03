<script>
	import {Card} from "flowbite-svelte";
	export let button = {
		label: 'Button',
		caption: 'Caption',
		link: 'https://example.com',
		animate: false
	}
</script>

<a href="/{button.link}"
	on:mouseenter={() => {
		button.animate = true
	}}
	on:mouseleave={() => {
		button.animate = false
	}}
>
	<div
		class="animate__animated bg-white h-full"
		class:animate__heartBeat={button.animate}
	>
		<Card class="h-full">
			<h3 class="text-lg font-semibold">{button.label}</h3>
			<p>{button.caption}</p>
		</Card>
	</div>
</a>
