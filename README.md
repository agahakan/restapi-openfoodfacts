<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">REST API using NestJS</p>

## Description

This API provides endpoints to search for products with barcodes using the OpenFoodFacts API. Additionally, users can sign up and sign in to access protected endpoints.

## Prerequisites

Node.js: You need to have Node.js installed on your system to run this application. You can download and install Node.js from the official website: https://nodejs.org/

NestJS: NestJS is a framework for building efficient, scalable, and enterprise-grade server-side applications. You can install NestJS using npm, the package manager for Node.js:

```bash
$ npm i -g @nestjs/cli
```
Docker: This application is fully containerized using Docker. You will need Docker installed on your system to run the containers. You can download and install Docker from the official website: https://www.docker.com/

Docker Compose: Docker Compose is a tool for defining and running multi-container Docker applications. You can install Docker Compose by following the instructions provided in the official Docker documentation: https://docs.docker.com/compose/install/

Prisma ORM: Prisma is a modern database toolkit that provides type-safe and auto-generated database client APIs. This application uses Prisma ORM to interact with the database. You can install Prisma using npm:

```bash
$ npm i prisma --save-dev
```

## Running the app

This project is fully containerized using Docker, and the development environment is managed through a docker-compose file. The application uses Prisma ORM to interact with the database.

To run the application, follow these steps:

1. Install the dependencies:
```bash
$ npm install
```

2. Start the Docker containers:

```bash
# This will start the Postgres container and the NestJS app container.
$ docker-compose up -d
```
3.  You can check if the containers are running using the following command:
 ```bash
$ docker ps
```
4. Run the following command to apply database migrations using Prisma:

```bash
$ npx prisma migrate dev
```
5. Now that the containers are up and running, you can access the NestJS app by navigating to http://localhost:3000 in your browser.

6. Prisma Studio is a web-based GUI tool for exploring and managing databases. To launch Prisma Studio, open a terminal and run the following command:

```bash
$ npx prisma studio
```
7. You can now navigate to http://localhost:5555 to explore the DB with Prisma Studio.

That's it! You should now be able to run the NestJS app and interact with the Postgres database. Don't forget to stop the containers once you're done using the following command:

```bash
$ docker-compose down
```

## API Documentation

After starting the NestJS app, you can access the Swagger documentation by navigating to http://localhost:3000/api in your browser.  This documentation provides an overview of all the endpoints available in the application, as well as their input and output parameters.

If you want to test the endpoints, you can click on the endpoint you want to test, fill in the required input parameters, and click "Try it out!" to see the response output.

However, you can also make requests to the API without using Swagger. To do so, you can use any HTTP client, such as cURL, Postman, or Insomnia, to send HTTP requests to the endpoints in the application.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Author

- [@agahakan](https://www.github.com/agahakan)

## License

Nest is [MIT licensed](LICENSE).
