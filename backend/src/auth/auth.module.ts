import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.startegy';

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
		global: true,
		secret: process.env.JWT_SECRET,
		signOptions: { expiresIn: '60s' },
	})],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	exports: [AuthService],
})
export class AuthModule {}
