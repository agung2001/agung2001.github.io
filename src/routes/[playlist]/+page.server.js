import { error } from '@sveltejs/kit';
import youtube from '../../youtube.js'
import {removeEmojisAndSymbols} from "$lib/strings.ts";
import {slugify} from "$lib/url.ts";

// @ts-ignore
export async function load({ params }) {
	// Check if playlist exists
	let exist = youtube.find((p) => {
		let slug = removeEmojisAndSymbols(p.name).trimStart()
		slug = slugify(slug)
		return params.playlist === slug;
	});

	// Throw error if not
	if(!exist) throw error(404, { message: 'Not Found' });

	return {
		playlist: params.playlist
	}
}
