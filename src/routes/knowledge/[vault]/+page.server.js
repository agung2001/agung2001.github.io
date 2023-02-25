import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	let data = {
		directory: await cakrawala.directory(params.vault),
		environment: await cakrawala.environment(),
		readme: '',
		vault: await cakrawala.vault(params.vault),
	}
	if (data.vault.readme) data.readme = await cakrawala.readme(params.vault, data.vault.readme)
	return data
}
