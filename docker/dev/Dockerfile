FROM node:18-alpine AS base
WORKDIR /app
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json yarn-lock.yaml* ./
RUN yarn install

# Development image, copy all the files and run next
FROM base as runner
WORKDIR /app
# Copy files
COPY --from=deps /app/node_modules/ ./node_modules/
COPY public/ ./public/
COPY src/ ./src/
COPY prisma ./prisma/ .env* next.config.mjs package.json postcss.config.js tailwind.config.js tsconfig.json ./
# Set environment variables
RUN npx prisma generate
# ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=development
ENV PORT 3000
ENV HOSTNAME localhost
EXPOSE 3000
CMD yarn run dev 
