import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	let data = { vaults: cakrawala.vault('') }
	return data;
}
