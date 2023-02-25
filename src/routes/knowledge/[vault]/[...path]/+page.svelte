<script>
	import Content from "../../components/Content.svelte";
	import ContentNavigation from "../../components/ContentNavigation.svelte";
	import Knowledge from "../../components/Knowledge.svelte";
	import KnowledgeDirectory from "../../components/KnowledgeDirectory.svelte";
	import {Data} from "../../../../stores/Data.js";
	export let data = {};

	/** Set the data */
	Data.set(data)

	/** Navigation State */
	let navigations = {
		graph: {
			visible: false
		},
		tableofcontents: {
			visible: false
		},
	}
</script>

<div class="relative sm:mx-auto md:w-5/6 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
	<div class="md:col-span-2">
		<div class="bg-white shadow-xl rounded mb-4">
			<Knowledge />
			<KnowledgeDirectory />
		</div>
	</div>
	<div class="md:col-span-4">
		<div class="bg-white shadow-xl rounded-lg mb-4">
			<ContentNavigation bind:navigations />
			<Content content={data.content} />
		</div>
	</div>
</div>
