/** Clear Port from URL */
export function clearPortfromUrl(urlString: string): string {
	let url: any = new URL(urlString);
	url.port = '';
	return url.toString()
}
