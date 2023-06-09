FROM node:16-bullseye-slim

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# new migrate and start app script
CMD [ "npm", "run", "start:migrate:prod" ]
