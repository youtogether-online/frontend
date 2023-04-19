# BUILD
FROM node:18.7.0-alpine3.16 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# RELEASE
FROM nginx:stable-alpine

WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]