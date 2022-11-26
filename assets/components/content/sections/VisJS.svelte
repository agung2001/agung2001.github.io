<script>
    export let config;
    let errorMessage = '';

    /** Draw Repo */
    async function draw(){
        let { username } = config;
        let response = await fetch(`https://api.github.com/users/${username}/repos`);
        let data;
        if(response.ok){
            data = await response.json();

            /** Nodes */
            let nodes = [{ id: 0, label: "agung2001", group: 1 }];
            data.map((v) => {
                nodes.push({
                    id: nodes.length,
                    label: v.name,
                    value: v.stargazers_count,
                    group: nodes.length,
                })
            });

            /** Edges */
            let edges = nodes.map((v) => {
                return { from: v.id, to: 0 };
            });
            edges.shift();

            setTimeout(function(){
                // create a network
                var container = document.getElementById("github-network");
                var data = {
                    nodes: nodes,
                    edges: edges,
                };
                var options = {
                    nodes: {
                        shape: "dot",
                    },
                    physics: {
                        forceAtlas2Based: {
                            gravitationalConstant: -26,
                            centralGravity: 0.005,
                            springLength: 230,
                            springConstant: 0.18,
                        },
                        maxVelocity: 146,
                        solver: "forceAtlas2Based",
                        timestep: 0.35,
                        stabilization: { iterations: 150 },
                    },
                };

                var network = new vis.Network(container, data, options);
            }, 500);
        } else { errorMessage = `Failed to reach endpoint!`; }
    }
    document.onload = draw();
</script>

<div class="bg-white shadow-xl rounded-lg mb-4">
    <div class="p-6">
        <h2 class="mb-2 text-lg border-b border-gray-200">Github Repository</h2>
    </div>
    <div id="github-network">{errorMessage}</div>
</div>

<style>
    #github-network { height: 50vh; }
</style>