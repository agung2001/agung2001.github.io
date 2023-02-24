<script>
	import config from "../../../config.js";
	import ListTreeMenu from "./ListTreeMenu.svelte";

	const { name } = config
</script>

<div id="knowledge-directory" class="bg-white shadow-xl rounded py-4">
	<ul id="list-tree">
		<ListTreeMenu />
	</ul>
</div>

