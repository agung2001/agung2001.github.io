<script>
	import mermaid from "mermaid";
	import {onMount} from "svelte";
	export let content = '';

	/** Lifecylce onMount */
	onMount(async () => {
		mermaid.initialize({ startOnLoad: false });
		await mermaid.run({
			querySelector: '.language-mermaid',
		});
	})
</script>

<div id="knowledge-content" class="p-6">
	<div class="prose content mx-auto">
		{ @html content }
	</div>
</div>
