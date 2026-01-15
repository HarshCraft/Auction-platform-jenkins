FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy backend code
COPY ./

# Expose port your app runs on (e.g., 3000)
EXPOSE 3000

# Run the backend
CMD ["node", "index.js"]
