<script>
	import Knowledge from "./components/Knowledge.svelte";
	import Content from "./components/Content.svelte";
	import ContentNavigation from "./components/ContentNavigation.svelte";
</script>

<div class="relative sm:mx-auto md:w-5/6 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
	<div class="md:col-span-2">
		<div class="bg-white shadow-xl rounded-lg">
			<Knowledge />
		</div>
	</div>
	<div class="md:col-span-4">
		<div class="bg-white shadow-xl rounded-lg mb-4">
			<ContentNavigation />
			<Content />
		</div>
	</div>
</div>

