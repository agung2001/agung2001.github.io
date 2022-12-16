import App from './App.svelte';

/** Load config.json & App */
(async function loadConfig(){
	await fetch('./config.json')
		.then((response) => response.json())
		.then((config) => {
			let { name } = config;

			/** Welcome Terminal ASCII */
			console.log(`༼ つ ◕_◕ ༽つ Welcome to ${name} profile`);

			/** Display Component */
			document.title = name;
			const app = new App({
				target: document.querySelector('#content'),
				props: { config }
			});
		});
})();

export default app;