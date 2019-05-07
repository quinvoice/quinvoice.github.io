FROM node:12 as builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm i -g yarn
RUN yarn install
RUN yarn build

FROM nginx:1.16-alpine as prod

COPY --from=builder /app/build /usr/share/nginx/html
