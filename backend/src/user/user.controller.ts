import { Controller, Get, Param, UseGuards, Req, Headers, Post } from '@nestjs/common';
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
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return this.userservice.getMe(payload.sub);
	}

	@Post('username')
	@UseGuards(JwtAuthGuard)
	async changeUsername(@Headers('Authorization') token: string, @Req() req: any) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any}; 
		this.userservice.changeUsername(payload.sub, req.newName);
	}

	@Get('friend/request')
	@UseGuards(JwtAuthGuard)
	getFriendRequest(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return this.userservice.getFriendRequest(payload.sub);
	}

	@Get('friend/list')
	@UseGuards(JwtAuthGuard)
	async getFriendList(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return await this.userservice.getFriendList(payload.sub);
	}
}
