import youtube from "./src/youtube.js";
import fs from "fs";

// Generate playlist text
let text = '';
youtube.map((playlist) => {
	text += `## [${playlist.name}](${playlist.url}) \n`
	let episode = 1;
	playlist.videos.map((video) => {
		text += `- Episode ${episode} : [${video.name}](${video.url}) \n`
		episode++;
	})
	text += '\n'
})

// Write to file
try {
	fs.writeFileSync('playlist.md', text)
	console.log('✅ The file has been saved!')
} catch (e) {
	console.log(e)
}
