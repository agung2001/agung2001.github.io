const shell = require("shelljs");
const tailwindfilePath = './assets/build/css/tailwind.min.css';

shell.sed('-i', 'rgb', 'RGB', tailwindfilePath).to(tailwindfilePath);
shell.sed('-i', 'rgba', 'RGBA', tailwindfilePath).to(tailwindfilePath);
