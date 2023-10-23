FROM node:alpine

WORKDIR /code/

COPY package*.json .

RUN npm i

COPY . /code/

RUN npm run build

CMD ["npm", "run", "start:dev"]