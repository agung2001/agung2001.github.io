import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	return {
		directory: await cakrawala.directory(params.vault)
	};
}
