module.exports = {
  mode: 'jit',
  content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', // Include Flowbite Svelte components
  ],
  theme: {
    extend: {},
  },
  plugins: [
	  require('@tailwindcss/typography'),
	  require('flowbite/plugin'), // Add Flowbite as a plugin
  ],
  darkMode: 'class',
}
