import App from './App.svelte';

/** Load config.json & App */
(async function loadConfig(){
	await fetch('./config.json')
		.then((response) => response.json())
		.then((config) => {
			const app = new App({
				target: document.querySelector('#content'),
				props: { config }
			});
		});
})();

export default app;