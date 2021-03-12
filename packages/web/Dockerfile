FROM node:alpine AS builder

WORKDIR /usr

COPY package*.json ./
COPY tsconfig*.json ./

COPY . .

RUN yarn && yarn build

FROM nginx

ENV NODE_ENV production

WORKDIR /usr

COPY package*.json ./
COPY .env ./

COPY --from=builder /usr/src/package/web.next/ .next/

RUN yarn cache clean && yarn --prod

EXPOSE 3000

CMD [ "yarn", "start" ]