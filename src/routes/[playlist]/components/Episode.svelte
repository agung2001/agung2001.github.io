<script>
	export let button = {
		label: 'Button',
		caption: 'Caption',
		icon: 'fas fa-arrow-right',
		color: '#000',
		headingColor: '#000',
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
>
	<div
		class="animate__animated flex items-center py-2 px-4 rounded h-full"
		class:text-white={!button.textColor}
		class:animate__tada={button.animate}
		style="
			background-color: {button.color};
			{button.textColor ? `color: ${button.textColor};` : ''}
			{button.borderColor ? `border: 1px solid ${button.borderColor};` : ''}
		"
	>
		<i class={button.icon}/>
		<div class="ml-4">
			<h5 class="font-bold">{button.label}</h5>
			<p class="text-xs">{button.caption}</p>
		</div>
	</div>
</div>
