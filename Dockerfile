FROM nginx:latest

# Node
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
      && apt-get install -y nodejs
RUN npm i -g npm
RUN npm i grunt -g

# Directories and Files
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Install packages
RUN npm install --force
RUN grunt build

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]