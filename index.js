/** Libraries */
const { Octokit } = require("octokit");
const fs = require('fs');
require('dotenv').config();

/** Config and Environment Variables */
const config = JSON.parse( fs.readFileSync('config.json') );
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: GITHUB_TOKEN }); // Official clients for the GitHub API

/** Generate Data (nodes.json and edges.json) */
(async function(){
    /** GenerateEdgesandNodes Function */
    const GenerateEdgesandNodes = async (data, nodes, edges) => {
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

    /** Graph for Username */
    const GraphforUsername = async (nodes, edges) => {
        let { username } = config;
        let { data } = await octokit.request('GET /users/{username}/repos', { username });
        data = await GenerateEdgesandNodes(data, [{ id: 0, label: config.username, group: 1}], []);
        nodes = data.nodes; edges = data.edges;
        return { nodes, edges }
    }

    /** Graph for Organization */
    const GraphforOrganizations = async (nodes, edges) => {
        let { organizations } = config;
        organizations.map(async (org) => {
            let { data } = await octokit.request('GET /orgs/{org}/repos', { org })
            data = await GenerateEdgesandNodes(data, [{ id: nodes.length, label: org, group: nodes.length}], []);
            console.log(data);
            edges.push({ from: 0, to: nodes.length });
            nodes.push(...data.nodes); edges.push(...data.edges);
        });
        return { nodes, edges }
    }

    let data = await GraphforUsername([], [])
    data = await GraphforOrganizations(data.nodes, data.edges);

    // console.log(data);
    // console.log(edges);
})()