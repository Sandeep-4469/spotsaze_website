# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port for the React app to run
EXPOSE 8000

# Command to start the app
CMD ["npm", "start"]
