<script>
	import socials from "../../../socials.js";
	import LinkGeneral from "$lib/components/LinkGeneral.svelte";

	/** Transform data add animation state */
	socials.map((buttonGroup) => {
		buttonGroup.buttons = buttonGroup.buttons.map((button) => {
			return { ...button, animate: false }
		})
		return buttonGroup
	})
</script>

<div class="bg-white shadow-xl rounded-lg pb-2">
	{#each socials as buttonGroup}
		<div class="flex px-4 py-2 border-b border-gray-200">
			<h2 class="text-lg">{buttonGroup.label}</h2>
		</div>

		<div class="grid sm:grid-rows-1 md:grid-cols-3 gap-2 px-4 py-2">
			{#each buttonGroup.buttons as button}
				<LinkGeneral {button} />
			{/each}
		</div>
	{/each}
</div>
