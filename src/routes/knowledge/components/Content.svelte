<script>
	import mermaid from "mermaid";
	import {onMount} from "svelte";
	import {scrollToAnchor} from "$lib/navigation.ts";
	import {getWordStr} from "$lib/strings.ts";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	export let content = '';

	// Local Variables
	const { params } = $page;
	const { environment } = $Data
	let stripContent = content.replace(/(<([^>]+)>)/gi, '');
	stripContent = stripContent.trim().replace(/\s+/g, ' '); // Remove space before and after also trailing space

	/** Lifecylce onMount */
	onMount(async () => {
		// Mermaid.js
		mermaid.initialize({ startOnLoad: false });
		await mermaid.run({
			querySelector: '.language-mermaid',
		});

		// Scroll to Anchor
		scrollToAnchor();
	})
</script>

<!-- META TAG -->
<svelte:head>
	<meta property="og:type" content="article" />

	<meta name="description" content="{getWordStr(stripContent,30)}">
	<meta property="og:description" content="{getWordStr(stripContent,30)}" />
	<meta property="og:image" content="{`${environment.BASE_URL}/vaults/${params.vault}/cover.jpg`}" />

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:description" content="{getWordStr(stripContent,30)}">
	<meta name="twitter:image" content="{`${environment.BASE_URL}/vaults/${params.vault}/cover.jpg`}">
</svelte:head>

<div id="knowledge-content" class="p-6">
	<div class="prose content mx-auto mb-6">
		{ @html content }
	</div>
</div>
