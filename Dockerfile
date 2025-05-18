# Dockerfile

FROM node:18

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

WORKDIR /app

COPY . .

# Install dependencies
RUN pnpm install

# Build tsconfig.json if needed (skip if pakai ts-node langsung)
# RUN pnpm build

# Expose port
EXPOSE 8080

# Set HOST environment variable
ENV HOST=0.0.0.0
ENV PORT=8080

# Jalankan project pakai ts-node
CMD ["pnpm", "ts-node", "index.ts"]
