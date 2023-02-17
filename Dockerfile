# Use Node.js 16 as the base image
FROM node:16

# Packages
RUN apt-get update && apt-get install -yq \
    git \
    curl

# Set the working directory to /app
# TODO: git clone still refers to feature/sveltekit branch change it when release
WORKDIR /app
# RUN git clone -b feature/sveltekit https://github.com/agung2001/agung2001.github.io.git /app
COPY . .

# Build the application
RUN npm i --force
# RUN npx grunt

# Expose the default SvelteKit port
EXPOSE 3000
