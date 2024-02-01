<script>
	import { capitalize } from "$lib/strings.ts";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import config from "../../../config.js";
	const { name } = config
	const { params } = $page;
	const { filename, vault } = $Data
</script>

<div class="bg-white border-b border-gray-200">
	<div class="pt-4 pb-4 sm:px-6">
		<h3 class="mt-2 text-2xl font-bold">{name} { capitalize(params.vault) }</h3>
		<p class="mt-2 text-base font-normal text-gray-500">{filename}</p>
	</div>
</div>
