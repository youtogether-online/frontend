FROM node:18.10.0-alpine3.15 as build
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

RUN npx pkg ./node_modules/@import-meta-env/cli/bin/import-meta-env.js \
    -t node18-alpine-x64 \
    -o import-meta-env-alpine

COPY ./ /app

RUN pnpm run build

###
FROM steebchen/nginx-spa:stable as release

WORKDIR /app

COPY --from=build /app/dist /app/
COPY --from=build /app/import-meta-env-alpine /app/
COPY .env.sample ./scripts/start.sh /app/

EXPOSE 80

CMD ["sh", "/app/start.sh"]
