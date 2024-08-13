/** Clear Port from URL */
export function clearPortfromUrl(urlString: string): string {
	let url: any = new URL(urlString);
	url.port = '';
	return url.toString()
}

// Get repository image URL from static file
export function getRepositoryImageUrl(link: string): string {
	let name = link.replace('https://github.com/','').replace('/','-')
	name = name.replace('/pull/','-')
	return `/repo/${name}.jpg`
}
