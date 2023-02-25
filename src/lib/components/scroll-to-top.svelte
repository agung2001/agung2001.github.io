<script>
	import { fade } from 'svelte/transition';
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button id="scroll-to-top" class:hidden on:click={goTop}>
	<i class="fas fa-arrow-up"></i>
</button>

<style>
	.scroll-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: white;
		background-color: black;
	}

	.scroll-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
