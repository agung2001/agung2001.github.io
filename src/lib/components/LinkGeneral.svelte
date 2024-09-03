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
		class="animate__animated flex items-center py-2 px-4 rounded h-full"
		class:text-white={!button.textColor}
		target="_blank"
		rel="noreferrer"
		class:animate__tada={button.animate}
		style="
			background-color: {button.color};
			{button.textColor ? `color: ${button.textColor};` : ''}
			{button.borderColor ? `border: 1px solid ${button.borderColor};` : ''}
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
		</div>
	</a>
</div>
