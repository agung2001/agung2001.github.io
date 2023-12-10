<script>
	import {capitalize} from "$lib/strings.ts";
	import {DocTitle} from "../../stores/Layout.js";
	export let data = {};
	let { vaults } = data;
	vaults = (vaults) ?
		Object.fromEntries( // sort vaults by name, ignore case
			Object.entries(vaults).sort(([a], [b]) =>
				a.localeCompare(b, undefined, { sensitivity: 'base' })
			)
		)
	: vaults;

	// Set Data
	DocTitle.set("Knowledge");
</script>

{#if vaults}
	<div class="grid grid-cols-1 md:grid-cols-4 gap-4 m-4 md:m-0">
		{#each Object.entries(vaults) as [name, attribute]}
			<div class="relative bg-white p-4 pb-6 shadow-lg border border-gray-300">
				<a data-sveltekit-reload href="/knowledge/{name}">
					<h2 class="text-2xl font-bold mb-4">{ capitalize(name) }</h2>
					{#each Object.entries(attribute) as [key, value]}
						<span class="bg-gray-200 rounded-full px-4 py-2 mr-2 text-sm">
							<b>{key}</b>: {value}
						</span>
					{/each}
				</a>
			</div>
		{/each}
	</div>
{/if}
