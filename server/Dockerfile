FROM node:20.11.0

#Build this image we use docker build -f Dockerfile -t react-app . bacailly dockerfile create a 
#image and than container but the composer requrid the image than create the container
#to crerate a container using docker file docker run -p 3000:3000 react-app
#to enter into any container docker exec -it ecomm-node-server sh      
# Set working directory
RUN npm install -g nodemoncd
RUN mkdir -p /server/app
WORKDIR /server/app

# Copy package.json and package-lock.json if available
COPY /package*.json ./

# Installing dependencies
RUN npm install

# Copying source files
COPY . .

# Expose port and start application
EXPOSE 5000
CMD ["npm", "run", "dev"]
