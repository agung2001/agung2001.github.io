<script>
    export let config;
	import Contact from '../sections/Contact.svelte';
	import VisJS from '../sections/VisJS.svelte';
</script>

<VisJS {config} />
<Contact {config} />