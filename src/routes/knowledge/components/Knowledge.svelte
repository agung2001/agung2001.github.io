<script>
	import { capitalizeFirstLetter } from "$lib/strings.ts";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import config from "../../../config.js";
	const { name } = config
	const { params } = $page;
	const { environment, vault } = $Data
	let cover = `background-image: url('/vaults/${params.vault}/cover.jpg')`
</script>

<div class="bg-white">
	{#if vault.assets.cover}
		<div class="h-44 bg-cover bg-center bg-no-repeat" style="{cover}" />
	{/if}
	{#if vault.assets.logo}
		<img
			src={`/vaults/${params.vault}/logo.jpg`}
			class="w-44 h-44 -mt-32 mx-auto ring-4 ring-white shadow-xl rounded-full z-99"
			alt={name}
		/>
	{/if}
	<div class="px-6 pt-4 pb-4 sm:px-10">
		<h1 class="mt-2 text-2xl text-center font-bold">{name}</h1>
		<p class="mt-2 text-center text-base font-normal text-gray-500">{ capitalizeFirstLetter(params.vault) } Knowledge</p>
	</div>
</div>
