FROM nginx:latest

# Packages
RUN apt-get update && apt-get install -yq \
    git \
    curl

# Install NodeJS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
      && apt-get install -y nodejs

# fix npm - not the latest version installed by apt-get
RUN npm install -g npm

# Directories and Files
RUN rm -rf /usr/share/nginx/html/*
RUN git clone https://github.com/agung2001/agung2001.github.io.git /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# NPM Install
RUN npm i --force
RUN node index.js
RUN npx grunt

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]