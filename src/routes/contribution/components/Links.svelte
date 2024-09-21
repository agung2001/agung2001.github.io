<script>
	import { Card } from 'flowbite-svelte';
	import contributions from "../../../contribution.js";
	import LinkOpenGraphLocal from "$lib/components/LinkOpenGraphLocal.svelte";
	import FinanceContribution from "$lib/components/FinanceContribution.svelte";

	/** Transform data add animation state */
	contributions.map((buttonGroup) => {
		buttonGroup.buttons = buttonGroup.buttons.map((button) => {
			return { ...button, animate: false }
		})
		return buttonGroup
	})
</script>

{#each contributions as buttonGroup}
	<Card class="max-w-full mb-6">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{buttonGroup.label}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{@html buttonGroup.description}
		</p>
		<div class="pt-4 grid sm:grid-rows-1 md:grid-cols-4 gap-2">
			{#each buttonGroup.buttons as button}
				{#if button.type ==='opengraph' }
					<LinkOpenGraphLocal {button} />
				{:else}
					<FinanceContribution {button} />
				{/if}
			{/each}
		</div>
	</Card>
{/each}
