<script>
	import { capitalizeFirstLetter } from "$lib/strings.ts";
	import Content from "../components/Content.svelte";
	import ContentNavigation from "../components/ContentNavigation.svelte";
	import Knowledge from "../components/Knowledge.svelte";
	import KnowledgeDirectory from "../components/KnowledgeDirectory.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import {DocTitle} from "../../../stores/Layout.js";
	import {onMount} from "svelte";
	import Split from 'split.js'
	export let data = {};

	/** Set the data */
	Data.set(data)

	/** set Document Title */
	const { params } = $page;
	const { filename } = $Data;
	DocTitle.set(`${capitalizeFirstLetter(params.vault)} Knowledge - ${filename}`)

	/** onMount */
	onMount(() => {
		var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
		if(width > 1024){
			Split(['#split-1', '#split-2'], {
				gutterSize: 2,
				sizes: [20, 80],
				minSize: [300, 300],
			})
		}
	})
</script>

<div class="md:w-5/6 mx-auto bg-white border border-gray-300">
	<div class="split relative min-h-screen">
		<div id="split-1" class="md:col-span-2 bg-white flex flex-col">
			<Knowledge />
			<KnowledgeDirectory />
		</div>
		<div id="split-2" class="md:col-span-10 bg-white">
			<div class="bg-white">
				<ContentNavigation />
				<Content content={data.content} />
			</div>
		</div>
	</div>
	<slot />
</div>
