<script>
	import repositories from "../../../repositories.js";
</script>

<div class="bg-white shadow-xl rounded-lg mb-4">

	<h2 class="mb-2 text-lg border-b border-gray-200 px-4 py-2">
		🗂️ Repositories
	</h2>

	<div class="grid md:grid-cols-3 gap-1 px-2 pb-2">
		{#each repositories as repository}
			<div class="border border-gray-100">
				<a href="{repository.link}" target="_blank">
					<img src="{repository.src}">
				</a>
			</div>
		{/each}
	</div>

</div>
