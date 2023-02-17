import shell from "shelljs"
const tailwindfilePath = './static/css/tailwind.min.css';

shell.sed('-i', 'rgb', 'RGB', tailwindfilePath).to(tailwindfilePath);
shell.sed('-i', 'rgba', 'RGBA', tailwindfilePath).to(tailwindfilePath);
