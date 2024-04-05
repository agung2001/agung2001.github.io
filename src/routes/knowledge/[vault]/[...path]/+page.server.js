import {redirect} from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {
	throw redirect(
		302,
		`https://brain.agungsundoro.com/agung-sundoro/${params.vault}/${params.path}`
	);
}
