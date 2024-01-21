FROM node:alpine

RUN apk add --no-cache vim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .


EXPOSE 3000

CMD ["npm", "start"]

#RUN apk add --no-cache vim