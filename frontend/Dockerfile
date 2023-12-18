FROM node:18-alpine

WORKDIR /front

COPY package.json .
COPY package-lock.json .

RUN npm install vite
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]