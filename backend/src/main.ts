import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';
  
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(cookieParser(
		// process.env.JWT_SECRET,
		process.env.REFRESH_SECRET
	))
	app.useGlobalPipes(new ValidationPipe({
		whitelist: true,
	}));
	app.enableCors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	});
	await app.listen(3333);
}
bootstrap();
