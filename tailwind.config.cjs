module.exports = {
  mode: 'jit',
  content: [ "./src/**/*.{html,js,svelte,ts}" ],
  theme: {
    extend: {},
  },
  plugins: [
	  require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
