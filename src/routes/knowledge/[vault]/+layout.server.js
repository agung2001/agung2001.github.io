import cakrawala from "$lib/cakrawala";

// @ts-ignore
export async function load({ params }) {
	let data = await cakrawala.data(params);
	return data;
}
