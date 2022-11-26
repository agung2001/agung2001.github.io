<script>
	let socialButtons = [
		{
			"label": "Contact",
			"buttons": [
				{
					"label": "WhatsApp",
					"caption": "Share your latest meme",
					"link": "https://wa.me/6287738846518",
					"icon": "fab fa-whatsapp",
					"color": "#56d263",
					"animate": false,
				},
				{
					"label": "Telegram",
					"caption": "Share a story about your ex",
					"link": "https://t.me/agungsundoro",
					"icon": "fab fa-telegram",
					"color": "#1b89d4",
					"animate": false,
				},
				{
					"label": "Skype",
					"caption": "Inquiry and Professional Work",
					"link": "https://join.skype.com/invite/cZ64qk7eAZfK",
					"icon": "fab fa-skype",
					"color": "#00aff0",
					"animate": false,
				},
			]
		},
		{
			"label": "Social",
			"buttons": [
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
					"label": "WordPress",
					"caption": "Just another WordPress Profile",
					"link": "https://profiles.wordpress.org/agung2001/",
					"icon": "fab fa-wordpress",
					"color": "#23282d",
					"animate": false,
				},
				{
					"label": "Linkedin",
					"caption": "Find a job, Make Money, Repeat",
					"link": "https://www.linkedin.com/in/agungsundoro",
					"icon": "fab fa-linkedin",
					"color": "#0a66c2",
					"animate": false,
				},
				{
					"label": "YouTube",
					"caption": "Having fun doing music and research",
					"link": "https://www.youtube.com/channel/UCI1uulkvet06Mm3wfpQvpLg",
					"icon": "fab fa-youtube",
					"color": "#fe0000",
					"animate": false,
				},
				{
					"label": "Blogspot",
					"caption": "Old collection of articles",
					"link": "https://agungsundoro.blogspot.com/",
					"icon": "fab fa-blogger",
					"color": "#f06a35",
					"animate": false,
				},
				{
					"label": "Dribbble",
					"caption": "Design work",
					"link": "https://dribbble.com/agung2001",
					"icon": "fab fa-dribbble",
					"color": "#ea4c89",
					"animate": false,
				},
				{
					"label": "Github",
					"caption": "Contribute to open source",
					"link": "https://github.com/agung2001",
					"icon": "fab fa-github",
					"color": "#24292f",
					"animate": false,
				},
				{
					"label": "Facebook",
					"caption": "Meet the community",
					"link": "https://www.facebook.com/cotothepong/",
					"icon": "fab fa-facebook",
					"color": "#1977f3",
					"animate": false,
				},
			]
		},

	];
</script>

<div class="p-6">
	{#each socialButtons as buttonGroup}
		<div class="mb-4">
			<h2 class="mb-2 text-lg border-b border-gray-200">{ buttonGroup.label }</h2>
			<div class="grid sm:grid-rows-1 md:grid-cols-3 gap-2">
				{#each buttonGroup.buttons as button}
					<div on:mouseenter={() => { button.animate = true; }} on:mouseleave={() => { button.animate = false; }} >
						<a
							href="{ button.link }"
							class="animate__animated flex items-center py-2 px-4 rounded"
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
	{/each}
</div>