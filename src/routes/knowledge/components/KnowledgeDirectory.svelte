<script>
	import { capitalizeFirstLetter } from "../../../lib/strings.ts";
	import {page} from "$app/stores";
	import config from "../../../config.js";
	import {Data} from "../../../stores/Data.js";

	console.log($Data)

	const { name } = config
	const { params } = $page;
</script>

<div class="bg-white shadow-xl rounded">
	{$Data}
</div>
