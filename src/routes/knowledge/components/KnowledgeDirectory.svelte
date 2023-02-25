<script>
	import config from "../../../config.js";
	import ListTreeMenu from "./ListTreeMenu.svelte";

	const { name } = config
</script>

<div id="knowledge-directory" class="flex-grow bg-gray-50">
	<ul id="list-tree">
		<ListTreeMenu />
	</ul>
</div>

