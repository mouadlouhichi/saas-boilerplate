FROM node:20-alpine AS base
WORKDIR /app
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
RUN yarn global add pnpm

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# Rebuild the source code only when needed
FROM base as builder
WORKDIR /app
# Copy files
COPY --from=deps /app/node_modules ./node_modules
COPY public/ ./public/
COPY src/ ./src/
COPY prisma ./prisma/ next.config.mjs package.json postcss.config.cjs tailwind.config.js tsconfig.json ./

RUN npx prisma generate

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
# env vars
# add environment variables to client code
ARG DATABASE_URL_ARG
ARG NEXTAUTH_SECRET_ARG
ARG NEXTAUTH_URL_ARG
ARG NEXT_PUBLIC_APP_URL_ARG
ARG NEXT_PUBLIC_VERCEL_URL_ARG
ARG LOGLIB_API_KEY_ARG
ARG LOGLIB_SITE_ID_ARG
ARG LINKEDIN_ID_ARG
ARG LINKEDIN_SECRET_ARG
ARG FACEBOOK_ID_ARG
ARG FACEBOOK_SECRET_ARG

ENV DATABASE_URL=$DATABASE_URL_ARG
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET_ARG
ENV NEXTAUTH_URL=$NEXTAUTH_URL_ARG
ENV ANALYZE=$ANALYZE_ARG
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL_ARG
ENV NEXT_PUBLIC_VERCEL_URL=$NEXT_PUBLIC_VERCEL_URL_ARG
ENV LOGLIB_API_KEY=$LOGLIB_API_KEY_ARG
ENV LOGLIB_SITE_ID=$LOGLIB_SITE_ID_ARG
ENV LINKEDIN_ID=$LINKEDIN_ID_ARG
ENV LINKEDIN_SECRET=$LINKEDIN_SECRET_ARG
ENV FACEBOOK_ID=$FACEBOOK_ID_ARG
ENV FACEBOOK_SECRET=$FACEBOOK_SECRET_ARG
ENV NODE_ENV=production

RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/public/ ./public/
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/ ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static/ ./.next/static/
# Environment variables must be redefined at run time
# ENV NEXT_TELEMETRY_DISABLED 1
# env vars
# add environment variables to client code
ARG DATABASE_URL_ARG
ARG NEXTAUTH_SECRET_ARG
ARG NEXTAUTH_URL_ARG
ARG NEXT_PUBLIC_APP_URL_ARG
ARG NEXT_PUBLIC_VERCEL_URL_ARG
ARG LOGLIB_API_KEY_ARG
ARG LOGLIB_SITE_ID_ARG
ARG LINKEDIN_ID_ARG
ARG LINKEDIN_SECRET_ARG
ARG FACEBOOK_ID_ARG
ARG FACEBOOK_SECRET_ARG

ENV DATABASE_URL=$DATABASE_URL_ARG
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET_ARG
ENV NEXTAUTH_URL=$NEXTAUTH_URL_ARG
ENV ANALYZE=$ANALYZE_ARG
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL_ARG
ENV NEXT_PUBLIC_VERCEL_URL=$NEXT_PUBLIC_VERCEL_URL_ARG
ENV LOGLIB_API_KEY=$LOGLIB_API_KEY_ARG
ENV LOGLIB_SITE_ID=$LOGLIB_SITE_ID_ARG
ENV LINKEDIN_ID=$LINKEDIN_ID_ARG
ENV LINKEDIN_SECRET=$LINKEDIN_SECRET_ARG
ENV FACEBOOK_ID=$FACEBOOK_ID_ARG
ENV FACEBOOK_SECRET=$FACEBOOK_SECRET_ARG
ENV NODE_ENV=production



USER nextjs

EXPOSE 3000

ENV HOSTNAME 0.0.0.0
ENV PORT 3000

CMD ["node", "server.js"]
