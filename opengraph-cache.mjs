import axios from "axios";
import fs from "fs";
import path from "node:path";
import repositories from "./src/repositories.js";
import contribution from "./src/contribution.js";

// Get random string of length
function generateRandomString(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

// Download Image
async function downloadImage(url, directory, filename) {
	const filePath = path.resolve(directory, filename);
	const writer = fs.createWriteStream(filePath);
	const response = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	});
	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', reject);
	});
}

// Download repository image
repositories.map((repo) => {
	let random = `https://opengraph.githubassets.com/${generateRandomString(10)}/`;
	let url = repo.link.replace('https://github.com/',random)
	let name = repo.link.split('/')
	name =
		name[name.length - 2] + '-' +
		name[name.length - 1]
	let directory = './static/repo'

	// Download the Image
	fs.mkdirSync(directory, { recursive: true });
	downloadImage(url, directory, `${name}.jpg`)
	.then(() => console.log('✅ Image downloaded successfully!'))
	.catch(err => console.error('❌ Error downloading the image:', err));
})

// Download contribution image
contribution.map((contrib) => {
	contrib.buttons.map((repo) => {
		if( repo.type !== 'opengraph' ) return;
		let random = `https://opengraph.githubassets.com/${generateRandomString(10)}/`;
		let url = repo.link.replace('https://github.com/',random)
		let name = repo.link.split('/')
		name =
			name[name.length - 4] + '-' +
			name[name.length - 3] + '-' +
			name[name.length - 1]
		let directory = './static/repo'

		// Download the Image
		fs.mkdirSync(directory, { recursive: true });
		downloadImage(url, directory, `${name}.jpg`)
			.then(() => console.log('✅ Image downloaded successfully!'))
			.catch(err => console.error('❌ Error downloading the image:', err));
	})

})
