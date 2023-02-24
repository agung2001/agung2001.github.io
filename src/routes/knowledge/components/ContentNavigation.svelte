<script>
	import {onMount} from "svelte";
	import { requestFullscreen } from "../../../helpers/navigation.ts";
	import Sticky from "sticky-js"
	export let navigations;

	/** Lifecycle  onMount */
	onMount(() => {
		new Sticky('#knowledge-content-navigation'); // Sticky Content Navigation
	})
</script>

<div id="knowledge-content-navigation">
	<div class="flex justify-between p-4 rounded border-b border-gray-200 bg-white">
		<h2 class="text-lg">Navigation</h2>
		<div class="flex items-center gap-x-4">
			<button on:click={() => { navigations.graph.visible = !navigations.graph.visible }}>
				<i class="fas fa-diagram-project"></i>
			</button>
			<button on:click={() => { navigations.tableofcontents.visible = !navigations.tableofcontents.visible }}>
				<i class="fas fa-chart-bar"></i>
			</button>
			<button class="hidden md:block" on:click={() => { window.scrollTo({top: 0, behavior: 'smooth'}); }}>
				<i class="fas fa-arrow-up"></i>
			</button>
			<button class="hidden md:block" on:click={() => {requestFullscreen("knowledge-content")}}>
				<i class="fas fa-expand"></i>
			</button>
		</div>
	</div>
</div>
