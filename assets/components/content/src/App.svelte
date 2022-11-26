<script>
    export let config;
	import Contact from '../sections/Contact.svelte';
	import Profile from '../sections/Profile.svelte';
	import VisJS from '../sections/VisJS.svelte';
</script>

<div class="relative sm:mx-auto md:w-3/4 grid sm:grid-rows-1 md:grid-cols-6 gap-4">
    <div class="bg-white shadow-xl rounded-lg md:col-span-2">
        <div class="sm:rounded-t-xl h-44 bg-cover bg-center bg-no-repeat" style="background-image: url('assets/img/cover.jpg');"></div>
        <img src="assets/img/avatar.jpg" class="w-44 h-44 -mt-28 mx-auto ring-4 ring-white shadow-xl rounded-full z-99" alt="Agung Sundoro" />
        <div class="px-6 pt-4 pb-8 sm:px-10">
            <Profile {config} />
            <div class="mt-4 text-center text-xs text-gray-400">
                Build with 💖, explore the <a href="https://github.com/agung2001/agung2001.github.io">code</a>.
            </div>
        </div>
    </div>
    <div class="md:col-span-4">
        <VisJS {config} />
        <Contact {config} />
    </div>
</div>