# Use latest Node.js 22 image
FROM node:22

# Create and set working directory inside container
WORKDIR /app

# Copy only package.json and lock file first (cache layer)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all remaining source files
COPY . .

# Default port (can be overridden with -e PORT=xxxx)
ENV PORT=3000

# Expose the port to the host machine
EXPOSE ${PORT}

# Start the server
CMD ["node", "server.js"]
