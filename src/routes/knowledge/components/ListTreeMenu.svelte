<script>
	import ListTreeMenu from "./ListTreeMenu.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	export let children = [];

	const { params } = $page;
	const { directory } = $Data;
	const types = ((children) => {
		if(children.length == 0) return []
		return {
			dir: children.filter(child => child.Type == 'dir'),
			file: children.filter(child => child.Type == 'file')
		}
	})(children)
</script>

{#if children.length}
	{#if types.dir.length}
		{#each types.dir as child}
			<li class="py-2 px-4 flex items-center justify-between">
				<span class="caret" on:click={() => {
					console.log(this)
				}}>{child.Name}</span>
			</li>
		{/each}
	{/if}
	{#if types.file.length}
		{#each types.file as child}
			<li class="py-2 px-4 flex items-center justify-between">
				<a href="/knowledge/{params.vault}/{child.RelPath}" class="flex items-center">
					<span>{child.Name}</span>
				</a>
			</li>
		{/each}
	{/if}
{:else}
	{#if directory.length}
		<ListTreeMenu children={directory[0].Children} />
	{/if}
{/if}
