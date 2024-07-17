<script>
	import contributions from "../../../contribution.js";
	import LinkGeneral from "$lib/components/LinkGeneral.svelte";
	import LinkOpenGraph from "$lib/components/LinkOpenGraph.svelte";

	/** Transform data add animation state */
	contributions.map((buttonGroup) => {
		buttonGroup.buttons = buttonGroup.buttons.map((button) => {
			return { ...button, animate: false }
		})
		return buttonGroup
	})
</script>

{#each contributions as buttonGroup}
	<div class="bg-white shadow-xl rounded-lg mb-4 p-6">
		<h2 class="mb-2 text-lg border-b border-gray-200">
			{buttonGroup.label}
		</h2>
		<p class="text-gray-600 pb-2">
			{@html buttonGroup.description}
		</p>
		<div class="grid sm:grid-rows-1 md:grid-cols-4 gap-2">
			{#each buttonGroup.buttons as button}
				{#if button.type ==='opengraph' }
					<LinkOpenGraph {button} />
				{:else}
					<LinkGeneral {button} />
				{/if}
			{/each}
		</div>
	</div>
{/each}
