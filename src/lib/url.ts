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

// Slugify
export function slugify(text: any) {
	return text
		.toLowerCase() // Convert to lowercase
		.trim() // Remove leading/trailing spaces
		.replace(/[^\w\s-]/g, '') // Remove non-word characters (except for hyphens and spaces)
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
