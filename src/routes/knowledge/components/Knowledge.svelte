<script>
	import config from "../../../config.js";
	import github from "../../../github.js";
	let { name } = config
	let { username } = github
</script>

<div
	class="sm:rounded-t-xl h-44 bg-cover bg-center bg-no-repeat"
	style="background-image: url('img/cover.jpg');"
/>
<img
	src="img/avatar.jpg"
	class="w-44 h-44 -mt-32 mx-auto ring-4 ring-white shadow-xl rounded-full z-99"
	alt={name}
/>
<div class="px-6 pt-4 pb-8 sm:px-10">
	<h1 class="mt-2 text-2xl text-center font-bold">Vault</h1>
	<p class="mt-2 text-center text-base font-normal text-gray-500">README</p>
</div>
