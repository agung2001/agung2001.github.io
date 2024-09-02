import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import {removeEmojisAndSymbols} from "$lib/strings.ts";
import {slugify} from "$lib/url.ts";
import youtube from "../../../youtube.js";

// @ts-ignore
export async function load({ params }) {
	// Check if playlist exists
	let playlist = youtube.find((p) => {
		let slug = removeEmojisAndSymbols(p.name).trimStart()
		slug = slugify(slug)
		return params.playlist === slug;
	});

	// Throw error if not
	if(!playlist || typeof playlist.videos[params.episode] === 'undefined') throw error(404, { message: 'Not Found' });

	// Redirect to YouTube
	throw redirect(302, playlist.videos[params.episode].url);
}
