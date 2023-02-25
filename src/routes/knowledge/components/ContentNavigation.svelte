<script>
	import {onMount} from "svelte";
	import { requestFullscreen } from "$lib/navigation.ts";
	import ScrolltoTop from "$lib/components/scroll-to-top.svelte";
	import Sticky from "sticky-js"
	import {Data} from "../../../stores/Data.js";
	import { fade } from 'svelte/transition';
	export let navigations;

	const { filename } = $Data;

	/** Lifecycle  onMount */
	onMount(() => {
		let sticky = new Sticky('#knowledge-content-navigation'); // Sticky Content Navigation
		console.log(sticky);
	})
</script>

<div id="knowledge-content-navigation">
	<div class="flex justify-between px-6 py-4 rounded border border-gray-200 bg-white">
		<h2 class="text-lg">{filename}</h2>
		<div class="flex items-center gap-x-4">
			<button on:click={() => { navigations.graph.visible = !navigations.graph.visible }}>
				<i class="fas fa-diagram-project"></i>
			</button>
			<button on:click={() => { navigations.tableofcontents.visible = !navigations.tableofcontents.visible }}>
				<i class="fas fa-chart-bar"></i>
			</button>
			<ScrolltoTop />
		</div>
	</div>

	{ #if navigations.graph.visible }
		<div id="section-graph" class="flex justify-between px-6 py-4 rounded border-b border-gray-200 bg-white" in:fade out:fade>
			<h3 class="text-lg">Graph</h3>
			<div class="flex items-center gap-x-4">
				<button on:click={() => { navigations.graph.visible = !navigations.graph.visible }}>
					<i class="fas fa-xmark"></i>
				</button>
			</div>
		</div>
	{/if}
	{ #if navigations.tableofcontents.visible }
		<div id="section-tableofcontents" class="flex justify-between px-6 py-4 rounded border-b border-gray-200 bg-white" in:fade out:fade>
			<h3 class="text-lg">Table of Contents</h3>
			<div class="flex items-center gap-x-4">
				<button on:click={() => { navigations.tableofcontents.visible = !navigations.tableofcontents.visible }}>
					<i class="fas fa-xmark"></i>
				</button>
			</div>
		</div>
	{/if}
</div>
