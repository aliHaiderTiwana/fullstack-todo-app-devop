# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# CRUCIAL FIX: Force Linux execution permissions onto the node_modules binaries
RUN chmod -R +x node_modules/.bin

# Run TypeScript build cleanly without trailing comments
RUN npm run build

# Expose the backend port
EXPOSE 5000
CMD ["node", "dist/server.js"]