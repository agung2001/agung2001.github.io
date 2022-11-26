import App from './App.svelte';

console.log('MASUK');

const app = new App({
	target: document.querySelector('#content'),
});

export default app;