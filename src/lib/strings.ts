import {slugify} from "$lib/url";

/** Capitalize Entire String */
export function capitalize(string: string) {
	string = string.replace(/[^\w\s]/gi, " ")
	return string.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

/** Capitalize first letter */
export function capitalizeFirstLetter(string: string) {
	string = string.replace(/[^\w\s]/gi, " ")
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Get n number of words from string */
export function getWordStr(str: string, n: number) {
	return str.split(/\s+/).slice(0, n).join(" ");
}

// Get random string of length
export function generateRandomString(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

// Remove emoji and symbols
export function removeEmojisAndSymbols(text: string) {
	return text.replace(/[\p{Emoji}\p{Symbol}\p{Punctuation}\p{Mark}\p{Math_Symbol}]+/gu, '');
}

// Slugify and normalize name
export function SlugifyandNormalizeName(name: string) {
	return slugify( removeEmojisAndSymbols(name).trimStart() )
}
