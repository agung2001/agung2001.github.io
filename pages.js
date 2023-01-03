const fs = require('fs');

/** Include Assets/Build */
fs.readFile('.gitignore', 'utf8', (err, data) => {
	if (err) {
		throw err;
	}

	// Make the replacement
	const modifiedData = data.replace(new RegExp('/assets/build', 'g'), '');

	// Write the modified content back to the file
	fs.writeFile('.gitignore', modifiedData, 'utf8', (err) => {
		if (err) {
			throw err;
		}
		console.log('✅ Replacement successful!');
	});
});
