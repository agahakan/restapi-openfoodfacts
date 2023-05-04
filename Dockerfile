FROM node:16-bullseye-slim

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

# new migrate and start app script
CMD [ "npm", "start", "start:migrate:prod" ]
