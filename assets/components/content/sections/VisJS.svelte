<script>
    export let config;
    let errorMessage = 'Loading...';

    /** Generate Edges and Nodes */
    async function GenerateEdgesandNodes(endpoint, nodes, edges){
        let response = await fetch(endpoint);
        let data = await response.json();
        let root = nodes[0];

        /** Nodes */
        let counter = root.id + 1;
        data.map((v) => {
            nodes.push({
                id: counter,
                label: v.name,
                value: v.stargazers_count,
                url: v.html_url,
                group: counter,
            })
            counter++;
        });

        /** Edges */
        edges = nodes.map((v) => ({ from: v.id, to: root.id }));
        edges.splice(0, 1);

        return { nodes, edges };
    }

    /** Draw Repo */
    async function draw(){
        let { username, organizations, production } = config;
        try {
            let nodes, edges;
            if(production){
                await fetch('./nodes.json')
                    .then((response) => response.json())
                    .then((data) => { nodes = data; });
                await fetch('./edges.json')
                    .then((response) => response.json())
                    .then((data) => { edges = data; });
            } else {
                /** Graph for Username */
                let endpoint = `https://api.github.com/users/${username}/repos`;
                let data = await GenerateEdgesandNodes(endpoint, [{ id: 0, label: username, group: 1}], []);
                nodes = data.nodes; edges = data.edges;

                /** Graph for Organization */
                await organizations.map(async (organization) => {
                    let endpoint = `https://api.github.com/users/${organization}/repos`;
                    let data = await GenerateEdgesandNodes(endpoint, [{ id: nodes.length, label: organization, group: nodes.length}], []);
                    edges.push({ from: 0, to: nodes.length });
                    nodes.push(...data.nodes); edges.push(...data.edges);
                });

                console.log(nodes);
                console.log(edges);
            }

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
                network.on("click", function (params) {
                    if (params.nodes.length === 1) {
                        let node = nodes[ params.nodes[0] ];
                        if(node.url != null) {
                            window.open(node.url, '_blank');
                        }
                    }
                });
            }, 500);
        } catch(e) { errorMessage = 'Rate Limit Reached!'; }
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