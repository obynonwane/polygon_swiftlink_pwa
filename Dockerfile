# Use a Node.js base image compatible with Expo
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install Expo CLI globally
RUN npm install -g expo-cli

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Expo uses for development
EXPOSE 8081

# Start the Expo server
CMD ["npm", "start"]
