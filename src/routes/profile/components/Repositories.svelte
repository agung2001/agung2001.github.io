<script>
	import repositories from "../../../repositories.js";
	import LinkOpenGraphLocal from "$lib/components/LinkOpenGraphLocal.svelte";
</script>

<div class="bg-white shadow-xl rounded-lg mb-4">

	<div class="flex justify-between p-4 border-b border-gray-200">
		<h2 class="text-lg">🗂️ Repositories</h2>
		<a href="https://github.com/agung2001?tab=repositories" target="_blank">
			<i class="fa-solid fa-arrow-up-right-from-square"></i>
		</a>
	</div>

	<div class="grid md:grid-cols-3 gap-1 px-2 py-2">
		{#each repositories as repository}
			<LinkOpenGraphLocal button={repository} />
		{/each}
	</div>

</div>
