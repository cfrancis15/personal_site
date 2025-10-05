# Use Node.js 18 (more recent than your current Node 12)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files for both client and server
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies for both client and server
WORKDIR /app/client
RUN npm install --legacy-peer-deps

WORKDIR /app/server
RUN npm install

# Build the React frontend
WORKDIR /app/client
COPY client/ .
RUN npm run build

# Copy server files and move built frontend to server's public directory
WORKDIR /app/server
COPY server/ .
RUN mkdir -p public
RUN cp -r ../client/build/* ./public/

# Set environment variables
ENV PORT=5000
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]