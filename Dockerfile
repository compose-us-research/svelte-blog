FROM node:12 as node-build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run export

FROM nginx
COPY --from=node-build /app/__sapper__/export /usr/share/nginx/html
