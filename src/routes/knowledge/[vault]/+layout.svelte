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

	/** Navigation State */
	let navigations = {
		graph: {
			visible: false
		},
		tableofcontents: {
			visible: false
		},
	}

	/** onMount */
	onMount(() => {
		var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
		if(width > 1024){
			Split(['#split-1', '#split-2'], { gutterSize: 2 })
			document.querySelector('#split-1').style.width = '20%'
			document.querySelector('#split-2').style.width = '80%'
		}
	})
</script>

<div class="split relative min-h-screen">
	<div id="split-1" class="md:col-span-2 bg-white border-r border-gray-300 flex flex-col justify-center">
		<Knowledge />
		<KnowledgeDirectory />
	</div>
	<div id="split-2" class="md:col-span-10">
		<div class="bg-white">
			<ContentNavigation bind:navigations />
			<Content content={data.content} />
		</div>
	</div>
</div>
<slot />
