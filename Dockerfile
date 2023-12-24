# build env
FROM node:19.5.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . ./
RUN npm run build
CMD cp -r build result_build
