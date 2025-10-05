# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies
RUN cd client && npm install --legacy-peer-deps
RUN cd server && npm install

# Build the React frontend
RUN cd client && npm run build

# Copy server files
COPY server/ ./server/

# Move built frontend to server's public directory
RUN mkdir -p server/public
RUN cp -r client/build/* server/public/

# Set working directory to server
WORKDIR /usr/src/app/server

# Set environment variables
ENV PORT=5000
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]