<script>
	import { capitalizeFirstLetter } from "$lib/strings.ts";
	import Content from "../components/Content.svelte";
	import ContentNavigation from "../components/ContentNavigation.svelte";
	import Knowledge from "../components/Knowledge.svelte";
	import KnowledgeDirectory from "../components/KnowledgeDirectory.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import {DocTitle} from "../../../stores/Layout.js";
	export let data = {};

	/** Set the data */
	Data.set(data)

	/** set Document Title */
	const { params } = $page;
	const { filename } = $Data;
	DocTitle.set(`${capitalizeFirstLetter(params.vault)} Knowledge - ${filename}`)

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

<div class="relative">
	<div class="grid sm:grid-rows-1 md:grid-cols-12 min-h-screen">
		<div class="md:col-span-3 bg-white border-r border-gray-300 flex flex-col justify-center">
			<Knowledge />
			<KnowledgeDirectory />
		</div>
		<div class="md:col-span-9 border-r border-gray-300">
			<div class="bg-white">
				<ContentNavigation bind:navigations />
				<Content content={data.content} />
			</div>
		</div>
	</div>
</div>
<slot />
