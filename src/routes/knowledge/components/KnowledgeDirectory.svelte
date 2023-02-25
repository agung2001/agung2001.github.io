<script>
	import config from "../../../config.js";
	import ListTreeMenu from "./ListTreeMenu.svelte";

	const { name } = config
</script>

<div id="knowledge-directory" class="py-2">
	<ul id="list-tree">
		<ListTreeMenu />
	</ul>
</div>

