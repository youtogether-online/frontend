# BUILD
FROM node:18.7.0-alpine3.16 as build

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml tailwind.config.js /app/

RUN pnpm install

ENV VITE_API_URL=/api

COPY ./ /app/

RUN pnpm run build

# RELEASE
FROM steebchen/nginx-spa:stable

WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 80

CMD ["nginx"]
