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
			{#if buttonGroup.badges }
				{#each buttonGroup.badges as badge}
					<a href="{badge.link}" target="_blank" class="text-white text-xs font-semibold me-2 px-2.5 py-1.5 rounded-md" style="background:{badge.color};">
						{badge.label}
					</a>
				{/each}
			{/if}
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
