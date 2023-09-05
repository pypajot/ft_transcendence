import { Controller, Post, Body, Get, UseGuards, Res, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
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

	@Post('intralogin')
	async intralogin(@Body() code: string) {
		this.authservice.intralogin(code);
	}

	@Get('refresh')
	@UseGuards(RefreshAuthGuard)
	async refresh(@Res() res: any, @Req() req: any) {
		const token = await this.authservice.refresh(res, req.cookies.refresh_token);
		res.send({
			access_token: token
		});
	}
	
	@Post('logout')
	@UseGuards(JwtAuthGuard)
	logout(@Res() res: any, @Req() req: any) {
		const result = this.authservice.logout(res, req.cookies.refresh_token);
		res.send({ result });
	}
}