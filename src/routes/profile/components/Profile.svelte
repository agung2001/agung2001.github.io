<script>
	import config from "../../../config.js";
	import github from "../../../github.js";
	let { name, tagline, codeEnvironment } = config
	let { username } = github
</script>

<div class="sm:rounded-t-xl h-44 bg-cover bg-center bg-no-repeat bg-[url(/img/cover.jpg)]" />
<img
	src="/img/avatar.jpg"
	class="w-44 h-44 -mt-32 mx-auto ring-4 ring-white shadow-xl rounded-full z-99"
	alt={name}
/>
<div class="px-6 pt-4 pb-8 sm:px-10">
	<h1 class="mt-2 text-2xl text-center font-bold">{name}</h1>
	<p class="mt-2 text-center text-base font-normal text-gray-500">{tagline}</p>
	<div class="my-4 items-center w-full">
		<a href="https://github.com/{username}" target="_blank" rel="noreferrer">
			<img
				alt="{name} GitHub Stats"
				src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username={username}&show_icons=true&hide_border=false"
				width="100%"
			/>
		</a>
		<a href="https://github.com/{username}" target="_blank" rel="noreferrer">
			<img
				alt="{name} Top Languages"
				src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username={username}&langs_count=8&layout=compact&hide_border=false"
				width="100%"
			/>
		</a>
		<div class="border border-slate-200 p-4">
			<h2 class="pb-4 font-bold text-xl text-blue-600">Things I code with</h2>
			{#if codeEnvironment.length}
				<table class="table-auto w-full rounded">
					<thead>
						<tr>
							<th style="width:30%;" />
							<th />
						</tr>
					</thead>
					<tbody>
						{#each codeEnvironment as environment}
							<tr>
								<td>{environment.label}</td>
								<td class="grid grid-cols-6">
									{#each environment.tools as tool}<img
											class="h-12"
											src={tool}
											alt={environment.label}
										/>{/each}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>
	</div>
	<div class="mt-4 text-center text-xs text-gray-400">
		Build with 💖, explore the <a
			href="https://github.com/agung2001/agung2001.github.io">code</a
		>.
	</div>
</div>
