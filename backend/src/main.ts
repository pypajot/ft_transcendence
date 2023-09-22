import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';
import { AuthenticatedSocketIoAdapter } from './game/socker.adapter';
  
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(cookieParser(
		// process.env.JWT_SECRET,
		process.env.REFRESH_SECRET
	))
	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	});
	app.useWebSocketAdapter(new AuthenticatedSocketIoAdapter(app));
	await app.listen(3333, () => {
		console.log("Listening on port 3333..");
	  });
}
bootstrap();
