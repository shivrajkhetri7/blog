FROM node:latest

# Set the working directory
WORKDIR /home/server

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of your application files
COPY . .

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
