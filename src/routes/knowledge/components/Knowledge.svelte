<script>
	import config from "../../../config.js";
	import github from "../../../github.js";
	import {onMount} from "svelte";
	let { name, tagline, codeEnvironment } = config
	let { username } = github

	onMount(() => {
		setTimeout(function(){
			window.addEventListener('DOMContentLoaded', function() {
				let parentLis = document.querySelectorAll('.tree li:has(ul)');
				parentLis.forEach(function(parentLi) {
					parentLi.classList.add('parent_li');
					parentLi.querySelector(' > span').setAttribute('title', 'Collapse this branch');
				});

				let parentLiSpans = document.querySelectorAll('.tree li.parent_li > span');
				parentLiSpans.forEach(function(span) {
					span.addEventListener('click', function (e) {
						let children = this.parentElement.querySelector(' > ul > li');
						if (children.style.display === 'block') {
							children.style.display = 'none';
							this.setAttribute('title', 'Expand this branch');
							let icon = this.querySelector(' > i');
							icon.classList.add('fa-plus-square');
							icon.classList.remove('fa-minus-square');
						} else {
							children.style.display = 'block';
							this.setAttribute('title', 'Collapse this branch');
							let icon = this.querySelector(' > i');
							icon.classList.add('fa-minus-square');
							icon.classList.remove('fa-plus-square');
						}
						e.stopPropagation();
					});
				});
			});

		}, 500)
	})

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
	<h1 class="mt-2 text-2xl text-center font-bold">{name}</h1>
	<p class="mt-2 text-center text-base font-normal text-gray-500">{tagline}</p>
</div>
