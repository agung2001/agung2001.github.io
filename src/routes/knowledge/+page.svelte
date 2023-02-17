<script>
	import Navigation from "./components/Navigation.svelte";
	import Content from "./components/Content.svelte";
</script>

<div class="relative sm:mx-auto md:w-3/4 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
	<div class="md:col-span-2">
		<div class="bg-white shadow-xl rounded-lg">
			<Navigation />
		</div>
	</div>
	<div class="md:col-span-4">
		<Content />
	</div>
</div>
