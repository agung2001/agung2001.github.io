<script>
	import ListTreeMenu from "./ListTreeMenu.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import { fade } from 'svelte/transition';
	export let children = [];

	const { params } = $page;
	const { directory } = $Data;
	const types = ((children) => {
		if(children.length == 0) return []
		return {
			dir: children.filter(child => child.Type == 'dir').map(child => ({...child, active: false})),
			file: children.filter(child => child.Type == 'file').map(child => ({...child, active: false})),
		}
	})(children)
</script>

{#if children.length}
	{#if types.dir.length}
		{#each types.dir as child, index}
			<li class="py-2.5 px-4">
				<span
					class="caret"
					class:caret-down={child.active}
					on:click={(event) => {
					let index = event.target.dataset.index
					types.dir[index].active = !types.dir[index].active
					}} data-index={index}
				>{child.Name}</span>
				{#if child.Children.length && child.active}
					<ul in:fade out:fade>
						<ListTreeMenu children={child.Children} />
					</ul>
				{/if}
			</li>
		{/each}
	{/if}
	{#if types.file.length}
		{#each types.file as child}
			<li class="py-2.5 px-4 flex items-center justify-between">
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
