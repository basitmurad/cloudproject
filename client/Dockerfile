# Use an official Node.js runtime as a parent image
FROM node:18 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend using Vite
RUN npm run build

# Use Nginx to serve the frontend build files
FROM nginx:alpine

# Copy the Vite build output to the Nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80
