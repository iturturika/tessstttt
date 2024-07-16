# Use the official Node.js 20 image.
FROM node:20.15.0-alpine AS base

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package.json package-lock.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application.
RUN npm run build

# Use a lightweight image for the final build.
FROM node:20.15.0-alpine AS final

# Set the working directory.
WORKDIR /usr/src/app

# Copy the built application from the previous stage.
COPY --from=base /usr/src/app ./

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]