import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load() {
	return { vaults: cakrawala.vault('') }
}
