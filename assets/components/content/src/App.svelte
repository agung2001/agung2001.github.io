<script>
    export let config;
	import Links from '../sections/Links.svelte';
	import Profile from '../sections/Profile.svelte';
	import VisJS from '../sections/VisJS.svelte';
</script>

<div class="relative sm:mx-auto md:w-3/4 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
    <div class="bg-white shadow-xl rounded-lg md:col-span-2">
        <Profile {config} />
    </div>
    <div class="md:col-span-4">
        <VisJS {config} />
        <Links {config} />
    </div>
</div>