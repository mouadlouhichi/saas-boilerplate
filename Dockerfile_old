# Adapted from https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Install dependencies only when needed
FROM node:18-alpine AS deps
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
RUN pnpm i sharp

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY prisma ./prisma/ next.config.mjs package.json postcss.config.cjs tailwind.config.js tsconfig.json ./
COPY . .

RUN npx prisma generate



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

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV SKIP_ENV_VALIDATION 1
RUN echo ${NODE_ENV}
RUN echo ${SKIP_ENV_VALIDATION}
RUN NODE_ENV=${NODE_ENV} pnpm build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1
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

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


USER nextjs

EXPOSE 3000

ENV HOSTNAME 0.0.0.0
ENV PORT 3000

CMD ["node", "server.js"]



