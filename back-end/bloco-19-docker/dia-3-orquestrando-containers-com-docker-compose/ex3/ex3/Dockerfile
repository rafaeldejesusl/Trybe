FROM node:14-alpine AS build
WORKDIR /app
COPY ["./", "/usr/src/app"]
COPY package*.json ./
RUN npm install
RUN echo node_modules > .dockerignore
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]