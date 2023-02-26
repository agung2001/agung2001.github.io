# Use Node.js 16 as the base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app
RUN git clone https://github.com/agung2001/agung2001.github.io.git /app

# Build the application
RUN npm i --force
RUN npx grunt

# Expose the default SvelteKit port
EXPOSE 3000
