FROM node:lts-alpine

WORKDIR /authclient

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8082

CMD ["npm", "run", "serve"]