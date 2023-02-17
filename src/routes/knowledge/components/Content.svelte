<script>
	import { onMount } from 'svelte';
	import { requestFullscreen } from "../../../helpers/screen.ts";

	import edges from "../../../edges.json";
	import nodes from "../../../nodes.json";
	let graph
	let errorMessage = 'Loading...'

	/** Draw Repo */
	onMount(() => {
		try {
			setTimeout(function () {
				let container = document.getElementById('github-network')
				let data = {
					nodes: nodes,
					edges: edges,
				}
				let options = {
					nodes: {
						shape: 'dot',
					},
					physics: {
						forceAtlas2Based: {
							gravitationalConstant: -26,
							centralGravity: 0.005,
							springLength: 230,
							springConstant: 0.18,
						},
						maxVelocity: 146,
						solver: 'forceAtlas2Based',
						timestep: 0.35,
						stabilization: { iterations: 150 },
					},
				}

				// Initialize vis.js network, it uses cdn to load the assets
				graph = new vis.Network(container, data, options)
				graph.on('click', function (params) {
					if (params.nodes.length === 1) {
						let node = nodes[params.nodes[0]]
						if (node.url != null) {
							window.open(node.url, '_blank')
						}
					}
				})
			}, 100)
		} catch (e) {
			errorMessage = 'Rate Limit Reached!'
		}
	});
</script>

<div class="bg-white shadow-xl rounded-lg mb-4">
	<div class="flex justify-between p-4 border-b border-gray-200">
		<h2 class="text-lg">Experience Graph</h2>
		<button class="request-fullscreen" on:click={() => {requestFullscreen("github-network")}}>
			<i class="fas fa-expand"></i>
		</button>
	</div>
	<div id="github-network">{errorMessage}</div>
</div>

<style>
	#github-network {
		height: 50vh;
	}
</style>
