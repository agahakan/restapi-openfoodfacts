import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('REST API - OpenFoodFacts')
    .setDescription('This API provides endpoints to search for products with barcode using the OpenFoodFacts API. Additionally, users can sign up and sign in to access protected endpoints.')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'UserToken') // Add bearer authentication for Swagger
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();