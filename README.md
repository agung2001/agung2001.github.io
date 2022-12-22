![Screenshot](screenshot.png)

😎 a Fantasitc developer profile website using GitHub pages, SvelteJS, VisJS and Tailwind CSS. 

See the live [🌐 website][website].

![Stars](https://img.shields.io/github/stars/agung2001/agung2001.github.io?style=social)
![Size](https://img.shields.io/github/repo-size/agung2001/agung2001.github.io)
![Pulls](https://img.shields.io/docker/pulls/agung2001/agung2001.github.io)
![Image Size](https://img.shields.io/docker/image-size/agung2001/agung2001.github.io)
![Version](https://img.shields.io/docker/v/agung2001/agung2001.github.io)

## 🤖 Installation

1. Prepare your `config.json` change the information according to your credentials.
2. Rename `.env-sample` to `.env` and fill in your environment variable (GitHub Tokens)
3. Install node package `npm install`
4. Generate `nodes.json` and `edges.json` by running `node index.js`
5. Then open it :

### via any local Web Server : 
- PHP Server : `php -S 127.0.0.1:80`
- XAMPP, LAMP, MAMP, WAMP Server
- Nginx, Apache
- etc

### via docker run 
```
docker run -d -p 80:80 \
  --name agung2001.github.io \
  -v /path/to/config.json:/usr/share/nginx/html/config.json \
  -v /path/to/avatar.jpg:/usr/share/nginx/html/assets/img/avatar.jpg \
  -v /path/to/cover.jpg:/usr/share/nginx/html/assets/img/cover.jpg \
  -v /path/to/config.json:/usr/share/nginx/html/nodes.json \
  -v /path/to/config.json:/usr/share/nginx/html/edges.json \
  agung2001/agung2001.github.io:latest
```
- NOTE: Don't forget to change the `/path/to/` accordingly

## 📝 Notes 

### Distro
I made [DISTRO](DISTRO.md) to list a profile and customization you made to this repo. 

## 🔥 Development
- Install node package `npm install`
  - Generate `nodes.json` and `edges.json` by running `node index.js`
- Build asset `grunt build`
    - Watch `grunt watch`

### How to Generate GitHub Tokens
Please refer to [GitHub Docs - Creating a personal access token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create personal access token.
Please set the expiration to `no expiration` and enable : `Repo` and `User`

### Live Reload
This repo comes with livereload module, to learn more please goto [gruntjs/grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch/blob/main/docs/watch-examples.md#enabling-live-reload-in-your-html)

## 📚 Resources
- [Official Repo](https://github.com/agung2001/agung2001.github.io)
- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [Docker Hub](https://hub.docker.com/r/agung2001/agung2001.github.io)
- [GHCR](https://github.com/agung2001/agung2001.github.io/pkgs/container/agung2001.github.io)

## ⚒️ Built with
- [Animate.style](https://animate.style/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Fontawesome](https://fontawesome.com/)
- [Grunt JS](https://gruntjs.com/)
- [Octokit.js](https://github.com/octokit/octokit.js)
- [Svelte JS](https://svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vis JS](https://visjs.org/)

## ⭐️ Support & Contribution
Help support me by giving a star or [donate][website]
Please refer to [CONTRIBUTING](CONTRIBUTING.md) to see a way to contribute to this repo

[website]: https://agung2001.github.io