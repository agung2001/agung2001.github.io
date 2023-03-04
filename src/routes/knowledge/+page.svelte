<script>
	export let data = {};
	const { vaults } = data;
</script>

{#if vaults}
	<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
		{#each Object.entries(vaults) as [name, attribute]}
			<div class="relative bg-white p-4 pb-6 shadow-lg border border-gray-300">
				<a href="/knowledge/{name}">
					<h2 class="text-2xl font-bold mb-4">{name}</h2>
				</a>
				{#each Object.entries(attribute) as [key, value]}
                    <span class="bg-gray-200 rounded-full px-4 py-2 mr-2 text-sm">
                        <b>{key}</b>: {value}
                    </span>
				{/each}
			</div>
		{/each}
	</div>
{/if}
