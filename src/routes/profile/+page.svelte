<script>
	import Profile from "./components/Profile.svelte";
	import Links from "./components/Links.svelte";
	import Graph from "./components/Graph.svelte";
</script>

<div class="relative sm:mx-auto md:w-5/6 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
	<div class="md:col-span-2">
		<div class="bg-white shadow-xl rounded-lg">
			<Profile />
		</div>
	</div>
	<div class="md:col-span-4">
		<Graph />
		<Links />
	</div>
</div>
