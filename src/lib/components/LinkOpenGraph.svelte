<script>
	import { generateRandomString } from "$lib/strings.ts";
	export let button = {
		label: 'Open Graph',
		caption: 'Open Graph Protocol',
		icon: '/img/opengraph.svg',
		link: 'https://ogp.me/'
	}
	let random = `https://opengraph.githubassets.com/${generateRandomString(10)}/`;
</script>

<div>
	<a
		href={button.link}
		target="_blank"
		rel="noreferrer"
	>
		<img src={button.link.replace('https://github.com/',random)}
			 class="border border-gray-100"
			 alt={button.label}
		/>
	</a>
</div>
