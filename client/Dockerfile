FROM node:20.11.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Installing dependencies
RUN npm install --silent

# Copying source files
COPY . .

# Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
