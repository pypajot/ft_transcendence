import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';
  
async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bodyParser: false });
	app.use(cookieParser(
		// process.env.JWT_SECRET,
		process.env.REFRESH_SECRET
	))
	app.enableCors();
	app.useGlobalPipes(new ValidationPipe({
	whitelist: true,
	}));
	await app.listen(3333);
}
bootstrap();
