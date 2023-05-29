# BUILD
FROM node:18.7.0-alpine3.16 as build

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml tailwind.config.js /app/

RUN pnpm install

COPY ./ /app/

RUN pnpm run build

# RELEASE
FROM node:18.7.0

WORKDIR /app

CMD ["npx", "serve", "dist"]
