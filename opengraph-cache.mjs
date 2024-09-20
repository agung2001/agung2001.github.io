import axios from "axios";
import fs from "fs";
import path from "node:path";
import Jimp from "jimp";
import repositories from "./src/repositories.js";
import contribution from "./src/contribution.js";
const outputDir = './static/repo';

/**************/
// Please run this scripts couple of times to download all the images
// Opengraph sometimes download wrong image or response with 404
/**************/

// Variable that stores the image that has been downloaded
let ImageExists = [];

// Sleep function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

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
	sleep(2000)
	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', reject);
	});
}

// Resize Image
async function resizeImage(filePath) {
	try {
		const image = await Jimp.read(filePath);
		await image.resize(500, Jimp.AUTO)  // Resize the width to 500px, maintaining aspect ratio
			.quality(80)  // Set JPEG quality (optional)
			.writeAsync(filePath);  // Overwrite the original image

		console.log(`✅ Resized: ${filePath}`);
	} catch (err) {
		console.error(`❌ Error resizing ${filePath}:`, err);
	}
}

async function downloadRepositories(repositories, outputDir) {
	for (const repo of repositories) {
		try {
			let random = `https://opengraph.githubassets.com/${generateRandomString(10)}/`;
			let url = repo.link.replace('https://github.com/', random);
			let name = repo.link.split('/');
			name = `${name[name.length - 2]}-${name[name.length - 1]}`;

			// Ensure the output directory exists
			fs.mkdirSync(outputDir, { recursive: true });

			// Ignore if image been downloaded
			if (fs.existsSync(`${outputDir}/${name}.jpg`)) {
				ImageExists.push(`${name}.jpg`);
				continue;
			}

			// Download the image
			await downloadImage(url, outputDir, `${name}.jpg`);
			console.log(`✅ ${name} downloaded successfully, ${url}!`);
		} catch (err) {
			console.error(`❌ Error downloading the image for ${repo.link}:`, err);
		}
	}
}

async function downloadContributions(contribution, outputDir) {
	for (const contrib of contribution) {
		for (const repo of contrib.buttons) {
			if (repo.type !== 'opengraph') continue;

			try {
				let random = `https://opengraph.githubassets.com/${generateRandomString(10)}/`;
				let url = repo.link.replace('https://github.com/', random);
				let name = repo.link.split('/');
				name = `${name[name.length - 4]}-${name[name.length - 3]}-${name[name.length - 1]}`;

				// Ensure the output directory exists
				fs.mkdirSync(outputDir, { recursive: true });

				// Ignore if image been downloaded
				if (fs.existsSync(`${outputDir}/${name}.jpg`)) {
					ImageExists.push(`${name}.jpg`);
					continue;
				}

				// Download the image
				await downloadImage(url, outputDir, `${name}.jpg`);
				console.log(`✅ ${name} downloaded successfully, ${url}!`);
			} catch (err) {
				console.error(`❌ Error downloading the image for ${repo.link}:`, err);
			}
		}
	}
}

// Main function
async function main() {
	// Download images
	await downloadRepositories(repositories, outputDir);
	await downloadContributions(contribution, outputDir);

	// console.log(ImageExists);

	// Resize all images in a directory
	await fs.readdir(outputDir, (err, files) => {
		if (err) {
			return console.error('Could not read the directory:', err);
		}

		files.forEach(file => {
			const filePath = path.join(outputDir, file);

			// Ignore if image been downloaded
			// Only process files that are images (you can expand this list as needed)
			if (!ImageExists.includes(file) && file.match(/\.(jpg|jpeg|png|bmp)$/i)) {
				resizeImage(filePath);
			}
		});
	});
}
main().catch(err => console.error('❌ Error in main function:', err));
