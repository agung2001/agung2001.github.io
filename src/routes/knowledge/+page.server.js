import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	return {
		vaults: cakrawala.vault('')
	}
}
