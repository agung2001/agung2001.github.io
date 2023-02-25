<script>
	import {Data} from "../../../stores/Data.js";
	const { readme } = $Data
</script>

<div id="knowledge-content" class="p-4">
	<div class="content prose">
		{ @html readme }
	</div>
</div>
