<script>
	import ListTreeMenu from "./ListTreeMenu.svelte";
	import {page} from "$app/stores";
	import {Data} from "../../../stores/Data.js";
	import { fade } from 'svelte/transition';
	export let children = [];
	export let filepath = [];

	// Local Variables
	const { params } = $page;
	const { directory } = $Data;
	const types = ((children, filepath) => {
		if(children.length == 0) return []
		let data = {
			dir: children.filter(child => child.Type == 'dir').map(child => ({...child, active: false})),
			file: children.filter(child => child.Type == 'file').map(child => ({...child, active: false})),
		}

		// Auto open requested filepath
		let path = filepath[0]
		if(path){
			if( path.includes('.md') ) {
				data.file = data.file.map(child => {
					if(child.Name == path) {
						child.active = true
					}
					return child
				})
			} else {
				data.dir = data.dir.map(child => {
					if(child.Name == path) {
						child.active = true
					}
					return child
				})
			}
		}

		return data
	})(children, filepath)
	if(filepath.length>1) filepath.shift() // Nested auto open requested filepath
</script>

{#if children.length}
	{#if types.dir.length}
		{#each types.dir as child, index}
			<li class="py-2.5 px-4 border-l border-gray-300">
				<span
					class="caret hover:font-bold"
					class:caret-down={child.active}
					on:click={(event) => {
					let index = event.target.dataset.index
					types.dir[index].active = !types.dir[index].active
					}} data-index={index}
				>{child.Name}</span>
				{#if child.Children.length && child.active}
					<ul in:fade out:fade>
						<ListTreeMenu
							children={child.Children}
							filepath={filepath}
						/>
					</ul>
				{/if}
			</li>
		{/each}
	{/if}
	{#if types.file.length}
		{#each types.file as child}
			<li class="py-2.5 px-4 flex items-center justify-between border-l border-gray-300 hover:font-bold">
				<a data-sveltekit-reload href="/knowledge/{params.vault}/{child.RelPath}" class="flex items-center">
					<span>{child.Name}</span>
				</a>
			</li>
		{/each}
	{/if}
{:else}
	{#if directory.length}
		<ListTreeMenu
			children={directory[0].Children}
			filepath={params.path.split('/')}
		/>
	{/if}
{/if}
