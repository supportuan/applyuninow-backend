FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3337
ENV HOST=0.0.0.0

# Install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/ace ./ace
COPY --from=builder /app/server.js ./server.js

# Create necessary directories
RUN mkdir -p tmp/uploads

EXPOSE 3337

CMD ["node", "server.js"]
