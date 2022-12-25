/** Libraries */
const { Octokit } = require('octokit')
const fs = require('fs')
require('dotenv').config()

/** Config and Environment Variables */
const config = JSON.parse(fs.readFileSync('config.json'))
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: GITHUB_TOKEN }) // Official clients for the GitHub API

/** Generate Data (nodes.json and edges.json) */
;(async function () {
  /** GenerateEdgesandNodes Function */
  const GenerateEdgesandNodes = (data, nodes, edges) => {
    let root = nodes[0]

    /** Nodes */
    let counter = root.id + 1
    data.map((v) => {
      nodes.push({
        id: counter,
        label: v.name,
        value: v.stargazers_count,
        url: v.html_url,
        group: counter,
      })
      counter++
    })

    /** Edges */
    edges = nodes.map((v) => ({ from: v.id, to: root.id }))
    edges.splice(0, 1)
    return { nodes, edges }
  }

  /** User Graph */
  const UserGraph = async () => {
    let nodes, edges
    let { username } = config
    let { data } = await octokit.request('GET /users/{username}/repos', {
      username,
    })
    data = GenerateEdgesandNodes(
      data,
      [{ id: 0, label: config.username, group: 1 }],
      []
    )
    nodes = data.nodes
    edges = data.edges
    return { nodes, edges }
  }

  /**
   * Organization Graph
   * @param data Consists of nodes and edges data from user
   * */
  const OrganizationsGraph = async (data) => {
    let { nodes, edges } = data
    let { organizations } = config
    for (let i = 0; i < organizations.length; i++) {
      let org = organizations[i]
      let { data } = await octokit.request('GET /orgs/{org}/repos', { org })
      data = GenerateEdgesandNodes(
        data,
        [{ id: nodes.length, label: org, group: nodes.length }],
        []
      )
      edges.push({ from: 0, to: nodes.length })
      nodes.push(...data.nodes)
      edges.push(...data.edges)
    }
    return { nodes, edges }
  }

  /** Contribution Graph */
  const ContributionsGraph = async (data) => {
    let { nodes, edges } = data
    let { contributions } = config
    for (const [owner, repos] of Object.entries(contributions)) {
      let RepoData = []
      for (let i = 0; i < repos.length; i++) {
        let repo = repos[i]
        let { data } = await octokit.request('GET /repos/{owner}/{repo}', {
          owner,
          repo,
        })
        RepoData.push(data)
      }
      edges.push({ from: 0, to: nodes.length })
      let EdgesandNodes = GenerateEdgesandNodes(
        RepoData,
        [{ id: nodes.length, label: owner, group: nodes.length }],
        []
      )
      nodes.push(...EdgesandNodes.nodes)
      edges.push(...EdgesandNodes.edges)
    }
    return { nodes, edges }
  }

  /** Generate Data */
  let data = await UserGraph()
  data = await OrganizationsGraph(data)
  data = await ContributionsGraph(data)

  /** Write to File */
  try {
    fs.writeFileSync('nodes.json', JSON.stringify(data.nodes))
    fs.writeFileSync('edges.json', JSON.stringify(data.edges))
    console.log('✅ The file has been saved!')
  } catch (e) {
    console.log(e)
  }
})()
