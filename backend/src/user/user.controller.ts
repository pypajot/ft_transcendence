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
	async getMe(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return await this.userservice.getMe(payload.sub);
	}

	@Post('username')
	@UseGuards(JwtAuthGuard)
	async changeUsername(@Headers('Authorization') token: string, @Req() req: any) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any}; 
		return await this.userservice.changeUsername(payload.sub, req.body.newName);
	}

	@Post('avatar')
	@UseGuards(JwtAuthGuard)
	async changeAvatar(@Headers('Authorization') token: string, @Req() req: any) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any}; 
		return await this.userservice.changeAvatar(payload.sub, req.body.file);
	}

	@Get('friend/request')
	@UseGuards(JwtAuthGuard)
	async getFriendRequest(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return await this.userservice.getFriendRequest(payload.sub);
	}

	@Get('friend/list')
	@UseGuards(JwtAuthGuard)
	async getFriendList(@Headers('Authorization') token: string) {
		const payload = this.jwt.decode(token.split(' ')[1]) as { [key: string] : any};
		return await this.userservice.getFriendList(payload.sub);
	}
}
