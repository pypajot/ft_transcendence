import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
	constructor (private userservice: UserService) {};

	// @Get(':id')
	// getUser(@Param() params: any) {
	// 	return this.userservice.getUser(params);
	// }

	@Get('me')
	@UseGuards(JwtAuthGuard)
	getMe() {
		return 'test me';
	}
}
