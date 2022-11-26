<script>
	let socialButtons = [
		{
			"label": "Goodreads",
			"caption": "Reading a book together",
			"link": "https://goodreads.com/agungsundoro",
			"icon": "fas fa-book",
			"color": "#7d5024",
			"animate": false,
		},
		{
			"label": "Instagram",
			"caption": "Become an each other fans",
			"link": "https://instagram.com/agung2001",
			"icon": "fab fa-instagram",
			"color": "#ff008c",
			"animate": false,
		},
		{
			"label": "Twitter",
			"caption": "Any new tweet from elon musk?",
			"link": "https://twitter.com/agung2001",
			"icon": "fab fa-twitter",
			"color": "#1d9bf0",
			"animate": false,
		},
		{
			"label": "Linkedin",
			"caption": "Just another boring stuff",
			"link": "https://www.linkedin.com/in/agungsundoro",
			"icon": "fab fa-linkedin",
			"color": "#0a66c2",
			"animate": false,
		},
	];

	/** Social Buttons On Hover */
	function socialButtonsOver(i){
		socialButtons[i].animate = true;
	}

	/** Social Buttons On Out */
	function socialButtonsOut(i){
		socialButtons[i].animate = false;
	}
</script>

<div class="p-6">
	<div class="my-4">
		<h2 class="mb-2 text-lg border-b border-gray-200">Social</h2>
		<div class="grid sm:grid-rows-1 md:grid-cols-3 gap-2">
			{#each socialButtons as button, i}
				<div on:mouseenter={() => { socialButtons[i].animate = true; }} on:mouseleave={() => { socialButtons[i].animate = false; }} >
					<a
						href="{ button.link }"
						class="animate__animated flex items-center py-2 px-4"
						target="_blank"
						rel="noreferrer"
						class:animate__tada={ button.animate }
						style="background-color: {button.color};"
					>
						<i class="{ button.icon } text-white"></i>
						<div class="ml-4">
							<h5 class="text-white font-bold">{ button.label }</h5>
							<p class="whitespace-nowrap text-xs text-gray-100">{ button.caption }</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="my-4">
		<h2 class="mb-2 text-lg border-b border-gray-200">Contact</h2>
		<ul class="space-y-2">
			<li class="social-buttons">
				<a href="https://wa.me/6287738846518" class="animate__animated flex items-center py-2 px-6 rounded-lg" target="_blank" style="background-color: #56d263;">
					<i class="fab fa-whatsapp text-white"></i>
					<div class="ml-4">
						<h5 class="text-white font-bold">WhatsApp</h5>
						<p class="whitespace-nowrap text-xs text-gray-100">Showcase your latest memes</p>
					</div>
				</a>
			</li>
			<li class="social-buttons">
				<a href="https://t.me/agungsundoro" class="animate__animated flex items-center py-2 px-6 rounded-lg" target="_blank" style="background-color: #1b89d4;">
					<i class="fab fa-telegram text-white"></i>
					<div class="ml-4">
						<h5 class="text-white font-bold">Telegram</h5>
						<p class="whitespace-nowrap text-xs text-gray-100">Share a story about your ex</p>
					</div>
				</a>
			</li>
			<li class="social-buttons">
				<a href="https://join.skype.com/invite/cZ64qk7eAZfK" class="animate__animated flex items-center py-2 px-6 rounded-lg" target="_blank" style="background-color: #00aff0;">
					<i class="fab fa-skype text-white"></i>
					<div class="ml-4">
						<h5 class="text-white font-bold">Skype</h5>
						<p class="whitespace-nowrap text-xs text-gray-100">Inquiry and Professional Work</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</div>