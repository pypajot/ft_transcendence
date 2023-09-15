import { Controller, Get, Param, UseGuards, Req, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
	constructor (private userservice: UserService, private jwt: JwtService) {};

	// @Get(':id')
	// getUser(@Param() params: any) {
	// 	return this.userservice.getUser(params);
	// }

	@Get('me')
	@UseGuards(JwtAuthGuard)
	getMe(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]);
		return this.userservice.getMe(payload.sub);
	}
}
