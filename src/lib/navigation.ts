/** Scroll to Anchor if Present */
export const scrollToAnchor = () => {
	const hash = window.location.hash;
	const heading = (() => {
		// get all heading elements
		const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

		// loop through the headings and find the one that contains the text "Tools"
		let targetHeading;
		for (let i = 0; i < headings.length; i++) {
			// @ts-ignore
			if (headings[i].textContent.includes( hash.replace('#', '') )) {
				targetHeading = headings[i];
				break;
			}
		}

		return targetHeading;
	})()

	// Smooth scroll to heading
	if(hash && heading) {
		heading.scrollIntoView({ behavior: 'smooth' });
	}
}
