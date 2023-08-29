import { Controller, Post, Body, Get, UseGuards, Res, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('auth')
export class AuthController {
	constructor(private authservice: AuthService) {}

	@Get()
	login_form() {
		return 'this is a login form';
	}

	@Post('signup')
	signin(@Body() dto: AuthDto) {
		return this.authservice.signup(dto);
	}
	
	@Post('login')
	@UseGuards(LocalAuthGuard)
	async login(@Body() dto: AuthDto, @Res() res: any) {
		const token = await this.authservice.login(dto, res);
		res.send({
			access_token: token
		});
	}

	@Post('refresh')
	refresh(@Req() req: any) {
		return this.authservice.refresh(req.cookie);
	}
	
}