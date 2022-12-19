FROM nginx:latest

# Packages
RUN apt-get update && apt-get install -y \
    git

# Directories and Files
RUN rm -rf /usr/share/nginx/html/*
RUN git clone https://github.com/agung2001/agung2001.github.io.git /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]