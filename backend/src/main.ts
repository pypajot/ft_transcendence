import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
 // app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.use('/', (_, res) => {
    res.send('Hello, this is the root of the API!');
  });
  await app.listen(8000);
}
bootstrap();
