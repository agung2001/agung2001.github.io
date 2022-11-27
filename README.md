![Screenshot](screenshot.png)

My GitHub profile page. You can change the configuration of the page by changing [config.json](config.json) file and run the install. 
See the [demo][website]

## 🤖 Installation
### via docker run
```
docker run -d -p 80:80 \
  --name agung2001.github.io \
  -v /path/to/config.json:/usr/share/nginx/html/config.json \
  -v /path/to/avatar.jpg:/usr/share/nginx/html/assets/img/avatar.jpg \
  -v /path/to/cover.jpg:/usr/share/nginx/html/assets/img/cover.jpg \
  agung2001/agung2001.github.io:latest
```
- NOTE: Don't forget to change the `/path/to/` accordingly

### via manual build 
- Install node package `npm i`
- Build asset `grunt build`
  - Watch `grunt watch`

## 🔥 Development
- Rename `.env-sample` to `.env`
- Change `.env` according to your environment
- Docker `docker-compose up`

## ⚒️ Built with
- [Animate.style](https://animate.style/)
- [Fontawesome](https://fontawesome.com/)
- [Grunt JS](https://gruntjs.com/)
- [Svelte JS](https://svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vis JS](https://visjs.org/)

## 📚 Resources
- [Github](https://github.com/agung2001/agung2001.github.io)
- [Docker Hub](https://hub.docker.com/r/agung2001/agung2001.github.io)
- [Wiki](https://github.com/agung2001/agung2001.github.io/wiki/)

## ⭐️ Support
Help support me by giving a star or [donate][website]

[website]: https://agung2001.github.io