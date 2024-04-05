import {redirect} from "@sveltejs/kit";

// @ts-ignore
export async function load() {
	throw redirect(302,  'https://brain.agungsundoro.com/');
}
