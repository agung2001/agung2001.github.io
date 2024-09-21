<script>
	export let button = {
		label: 'Button',
		caption: 'Caption',
		icon: 'fas fa-arrow-right',
		color: '#000',
		textColor: '#fff',
		borderColor: '',
		link: 'https://example.com',
		animate: false
	}
</script>

<div
	on:mouseenter={() => {
		button.animate = true
	}}
	on:mouseleave={() => {
		button.animate = false
	}}
	class="h-full"
>
	<a
		href={button.link}
		class="animate__animated flex items-center py-2 px-4 rounded h-full border-2 bg-white"
		target="_blank"
		rel="noreferrer"
		class:animate__tada={button.animate}
		style="
			border-color: {button.color};
		"
	>
		{#if button.icon.includes('http')}
			<img src={button.icon} class="w-6" alt={button.label}/>
		{:else}
			<i class={button.icon}/>
		{/if}
		<div class="ml-4">
			<h5 class="font-bold">{button.label}</h5>
			<p class="text-xs">{button.caption}</p>
			<div
				class="inline-block mt-2 px-4 py-2 font-bold text-xs text-white rounded"
				style="
					background-color: {button.color};
				"
			>
				{button.amount}
			</div>
		</div>
	</a>
</div>
