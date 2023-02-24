<script>
	import ListTreeMenu from "./ListTreeMenu.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	export let children = [];

	const { params } = $page;
	const { directory } = $Data;
</script>

{#if children.length}
	{#each children as child}
		<li class="py-2 px-4 flex items-center justify-between">
			{#if child.Type == 'dir'}
				<span class="caret">{child.Name}</span>
			{:else}
				<a href="/knowledge/{params.vault}/{child.RelPath}" class="flex items-center">
					<span>{child.Name}</span>
				</a>
			{/if}
		</li>
	{/each}
{:else}
	{#if directory.length}
		<ListTreeMenu children={directory[0].Children} />
	{/if}
{/if}
