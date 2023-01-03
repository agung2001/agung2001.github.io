<script>
	import vis from 'vis-network'

	export let config
	let graph
	let errorMessage = 'Loading...'

	/** Draw Repo */
	async function draw() {
		let { production } = config
		try {
			let nodes, edges
			await fetch(
				'https://cdn.jsdelivr.net/gh/agung2001/agung2001.github.io@gh-pages/nodes.json'
			)
				.then((response) => response.json())
				.then((data) => {
					nodes = data
				})
			await fetch(
				'https://cdn.jsdelivr.net/gh/agung2001/agung2001.github.io@gh-pages/edges.json'
			)
				.then((response) => response.json())
				.then((data) => {
					edges = data
				})

			/** DEPRECATED - PUBLIC GITHUB API */
			if (!production) {
				let INFO = `
                    (◔_◔) This method has been obsolete in the latest version of the website!
                    Please refers to : https://github.com/agung2001/agung2001.github.io/releases/tag/1.0.2 if you still want to use it.
                    The newer version has support GitHub tokens to bypass rate limit, to learn more please refer to https://github.com/agung2001/agung2001.github.io
                `.replace(/  +/g, '')
				console.log(INFO)
			}
			/** DEPRECATED - PUBLIC GITHUB API */

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
	}

	document.onload = draw()
</script>

<div class="bg-white shadow-xl rounded-lg mb-4">
	<div class="flex justify-between p-4 border-b border-gray-200">
		<h2 class="text-lg">Experience Graph</h2>
	</div>
	<div id="github-network">{errorMessage}</div>
</div>

<style>
	#github-network {
		height: 50vh;
	}
</style>
