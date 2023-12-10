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
