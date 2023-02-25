import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	let vault = await cakrawala.vault(params.vault);
	let data = {
		content: (vault.readme) ? await cakrawala.readme(params.vault, vault.readme) : '',
		filename: (params.path) ? params.path : (vault.readme) ? vault.readme : '',
		directory: await cakrawala.directory(params.vault),
		environment: await cakrawala.environment(),
		vault
	}
	return data
}
