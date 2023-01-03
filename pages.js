const fs = require('fs');

/** Include Assets for GH Pages Build */
fs.readFile('.gitignore', 'utf8', (err, data) => {
	if (err) {
		throw err;
	}

	// Make the replacement
	let modifiedData = data.replace(new RegExp('/assets/build', 'g'), '');
	modifiedData = modifiedData.replace(new RegExp('nodes.json', 'g'), '');
	modifiedData = modifiedData.replace(new RegExp('edges.json', 'g'), '');

	// Write the modified content back to the file
	fs.writeFile('.gitignore', modifiedData, 'utf8', (err) => {
		if (err) {
			throw err;
		}
		console.log('✅ Replacement successful!');
	});
});
