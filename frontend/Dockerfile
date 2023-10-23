FROM node:alpine

COPY package*.json ./

WORKDIR /code/

RUN npm i

COPY . .

RUN npm run build
CMD ["npm", "run", "dev", "--host"]