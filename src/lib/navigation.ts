/** Full Screen */
export const requestFullscreen = (target: any) => {
	let element = document.getElementById(target)
	if (element && element.requestFullscreen) {
		element.requestFullscreen()
	}
}
