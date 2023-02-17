![Screenshot](screenshot.png)

😎 a Fantasitc developer profile website using GitHub pages, SvelteJS, VisJS and Tailwind CSS.

See  the live [🌐 website][website].

![Stars](https://img.shields.io/github/stars/agung2001/agung2001.github.io?style=social)
![Size](https://img.shields.io/github/repo-size/agung2001/agung2001.github.io)
![Pulls](https://img.shields.io/docker/pulls/agung2001/agung2001.github.io)
![Image Size](https://img.shields.io/docker/image-size/agung2001/agung2001.github.io)
![Version](https://img.shields.io/docker/v/agung2001/agung2001.github.io)

## 🤖 Installation

1. Prepare your `config.json` change the information according to your credentials.
2. Rename `.env-sample` to `.env` and fill in your environment variable (GitHub Tokens)

### 🌐 via any local Web Server
1. Install node package `npm install`
2. Generate `nodes.json` and `edges.json` by running `node generator.cjs`
3. Then open it :
   - PHP Server : `php -S 127.0.0.1:80`
   - XAMPP, LAMP, MAMP, WAMP Server
   - Nginx, Apache
   - etc

### 🐳 via Docker Compose
- Run `docker-compose up -d --build`

### 🐳 via Docker Run
1. Generate `nodes.json` and `edges.json`
```
docker run -d -p 80:80 \
  --name agung2001.github.io \
  -v /path/to/.env:/usr/share/nginx/html/.env \
  -v /path/to/config.json:/usr/share/nginx/html/config.json \
  -v /path/to/nodes.json:/usr/share/nginx/html/nodes.json \
  -v /path/to/edges.json:/usr/share/nginx/html/edges.json \
  agung2001/agung2001.github.io:latest
```

2. Run as daemon service
```
docker run -d -p 80:80 \
  --name agung2001.github.io \
  -v /path/to/.env:/usr/share/nginx/html/.env \
  -v /path/to/config.json:/usr/share/nginx/html/config.json \
  -v /path/to/avatar.jpg:/usr/share/nginx/html/assets/img/avatar.jpg \
  -v /path/to/cover.jpg:/usr/share/nginx/html/assets/img/cover.jpg \
  -v /path/to/nodes.json:/usr/share/nginx/html/nodes.json \
  -v /path/to/edges.json:/usr/share/nginx/html/edges.json \
  agung2001/agung2001.github.io:latest
```
- NOTE: Don't forget to change the `/path/to/` accordingly

## 📝 Notes

### Conventional Commits
- This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) to create a clean commit.
- If one of your commit is failing please try committing by using this type of commit message :
  - `feat: creating awesome feature for this repo`

### Distro
I made [DISTRO](DISTRO.md) to list a profile and customization you made to this repo.

### Google Analytics
To easily track visitors I use Google Analytics and put the code inside [index.html](index.html).
You can change the code with your own, if you also want to track the visitors coming to the website.

### How to Generate GitHub Tokens
- Please refer to [GitHub Docs - Creating a personal access token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create personal access token.
- Please set the expiration to `no expiration` and enable : `Repo` and `User`

### Live Reload
This repo comes with livereload module, to learn more please goto [gruntjs/grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch/blob/main/docs/watch-examples.md#enabling-live-reload-in-your-html)

## 📚 Resources
- [🌟 Official Repo](https://github.com/agung2001/agung2001.github.io)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0)
- [Docker Hub](https://hub.docker.com/r/agung2001/agung2001.github.io)
- [GHCR](https://github.com/agung2001/agung2001.github.io/pkgs/container/agung2001.github.io)
- [GitHub REST API Docs](https://docs.github.com/en/rest)

## ⚒️ Built with
- [Animate.style](https://animate.style/)
- [Commitlint](https://commitlint.js.org)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [EditorConfig](https://editorconfig.org/)
- [Eslint](https://eslint.org/)
- [Fontawesome](https://fontawesome.com/)
- [GitHub Action](https://github.com/features/actions)
	- [docker/build-push-action](https://github.com/docker/build-push-action)
	- [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
- [Grunt JS](https://gruntjs.com/)
- [Husky](https://typicode.github.io/husky)
- [Octokit.js](https://github.com/octokit/octokit.js)
- [Prettier](https://prettier.io/)
- [Svelte JS](https://svelte.dev/)
- [Release-It](https://www.npmjs.com/package/release-it)
  - [Bumper](https://github.com/release-it/bumper)
  - [Conventional Changelog](https://github.com/release-it/conventional-changelog)
- [TailwindCSS](https://tailwindcss.com/)
- [Vis JS](https://visjs.org/)

## ⭐️ Support & Contribution
- Help support me by giving a 🌟 or [donate][website]
- Please refer to [CONTRIBUTING](CONTRIBUTING.md) to see a way to contribute to this repo

[website]: https://agungsundoro.ddns.net
