import { Controller, Post, Body, Get, UseGuards, Res, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, CodeDto } from "./dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { RefreshAuthGuard } from "./guards/refresh-auth.guard";
import { JwtAuthGuard } from "./guards";

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

	@Get('callback')
	callback() {
		console.log("test callback");
	}

	@Post('intralogin')
	async intralogin( @Res() res: any,@Req() req: any) {
		const token = await this.authservice.intralogin(res, req.body.code);
		res.send({
			access_token: token
		});
	}

	@Get('refresh')
	async refresh(@Res() res: any, @Req() req: any) {
		const token = await this.authservice.refresh(res, req.cookies.refresh_token);
		res.send({
			access_token: token
		});
	}
	
	@Post('logout')
	@UseGuards(JwtAuthGuard)
	async logout(@Res() res: any, @Req() req: any) {
		const result = await this.authservice.logout(res, req.cookies.refresh_token);
		res.send({ result });
	}
}