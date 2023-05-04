<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">REST API using NestJS</p>

## Description

This API provides endpoints to search for products with barcode using the OpenFoodFacts API. Additionally, users can sign up and sign in to access protected endpoints.

## Installation

```bash
$ npm install
```

## Running the app

This project is fully containerized using Docker, and the development environment is managed through a docker-compose file. The application uses Prisma ORM to interact with the database.

To run the application, follow these steps:

1. Start the Docker containers

```bash
# This will start the Postgres container and the NestJS app container.
$ docker-compose up -d
```
2.  You can check if the containers are running using the following command:
 ```bash
$ docker ps
```
3. Run the following command to apply database migrations using Prisma:

```bash
$ npx prisma migrate dev
```
4. Now that the containers are up and running, you can access the NestJS app by navigating to http://localhost:3000 in your browser.

5. Prisma Studio is a web-based GUI tool for exploring and managing databases. To launch Prisma Studio, open a terminal and run the following command:

```bash
$ npx prisma studio
```
6. You can now navigate to http://localhost:5555 to explore the DB with Prisma Studio.

That's it! You should now be able to run the NestJS app and interact with the Postgres database. Don't forget to stop the containers once you're done using the following command:

```bash
$ docker-compose down
```


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
[MIT licensed](LICENSE).
