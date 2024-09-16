<script>
	import {getRepositoryImageUrl} from "$lib/url.ts";
	export let button = {
		label: 'Open Graph',
		caption: 'Open Graph Protocol',
		icon: '/img/opengraph.svg',
		link: 'https://ogp.me/',
		src: '',
		animate: false
	}
</script>

<div
	on:mouseenter={() => {
		button.animate = true
	}}
	on:mouseleave={() => {
		button.animate = false
	}}
>
	<a
		href={button.link}
		target="_blank"
		rel="noreferrer"
		class="animate__animated flex rounded"
		class:animate__bounce={button.animate}
	>
		<img src={button.src ? button.src : getRepositoryImageUrl(button.link)}
			 class="border border-gray-100"
			 alt={button.label}
		/>
	</a>
</div>
