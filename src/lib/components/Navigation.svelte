<script>
	import config from "../../config.js";
</script>

<div id="main-nav" class="top-0 px-6 py-4 flex justify-between w-full bg-white border border-gray-300">
	<div>
		<a data-sveltekit-reload href="/" class="flex">
			<img src="/favicon.ico" class="w-6 h-6" alt="Logo">
			<span class="pl-3">{ config.name }</span>
		</a>
	</div>
	<div class="flex gap-x-4">
		<a href="https://artistudio.xyz">
			<span class="pr-2">Back to main site</span> ➡️
		</a>
	</div>
</div>

