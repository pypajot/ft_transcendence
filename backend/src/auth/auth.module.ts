import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RefreshStrategy } from './strategies';
import { HttpModule } from '@nestjs/axios';

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			global: true,
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '60s' },
		}),
		HttpModule
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy, RefreshStrategy],
	exports: [AuthService],
})
export class AuthModule {}
