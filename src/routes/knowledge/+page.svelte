<script>
	import Knowledge from "./components/Knowledge.svelte";
	import Content from "./components/Content.svelte";
	import ContentNavigation from "./components/ContentNavigation.svelte";
	import { fade } from 'svelte/transition';

	/** Navigation State */
	let navigations = {
		graph: {
			visible: false
		},
		tableofcontents: {
			visible: false
		},
	}
</script>

<div class="relative sm:mx-auto md:w-5/6 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
	<div class="md:col-span-2">
		<div class="bg-white shadow-xl rounded-lg">
			<Knowledge />
		</div>
	</div>
	<div class="md:col-span-4">

		{ #if navigations.graph.visible }
			<div class="bg-white shadow-xl rounded-lg mb-4">
				<div id="section-graph" class="flex justify-between p-4 rounded border-b border-gray-200 bg-white" in:fade out:fade>
					<h3 class="text-lg">Graph</h3>
					<div class="flex items-center gap-x-4">
						<button on:click={() => { navigations.graph.visible = !navigations.graph.visible }}>
							<i class="fas fa-xmark"></i>
						</button>
					</div>
				</div>
			</div>
		{/if}
		{ #if navigations.tableofcontents.visible }
			<div class="bg-white shadow-xl rounded-lg mb-4">
				<div id="section-tableofcontents" class="flex justify-between p-4 rounded border-b border-gray-200 bg-white" in:fade out:fade>
					<h3 class="text-lg">Table of Contents</h3>
					<div class="flex items-center gap-x-4">
						<button on:click={() => { navigations.tableofcontents.visible = !navigations.tableofcontents.visible }}>
							<i class="fas fa-xmark"></i>
						</button>
					</div>
				</div>
			</div>
		{/if}

		<div class="bg-white shadow-xl rounded-lg mb-4">
			<ContentNavigation bind:navigations />
			<Content />
		</div>
	</div>
</div>

