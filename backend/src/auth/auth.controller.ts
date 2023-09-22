import { Controller, Post, Body, Get, UseGuards, Res, Req, HttpCode, HttpStatus} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, CodeDto } from "./dto";
import { RefreshAuthGuard } from "./guards/refresh-auth.guard";
import { JwtAuthGuard } from "./guards";
import { get } from "http";

@Controller('auth')
export class AuthController {
	constructor(private authservice: AuthService) {}

	@Get()
	login_form() {
		return 'this is a login form';
	}

	@Post('signup')
	async signin(@Body() dto: AuthDto, @Res() res: any) {
		const response = await this.authservice.signup(dto, res);
		res.send(response);
	}
	
	@Post('login')
	async login(@Body() dto: AuthDto, @Res() res: any) {
		await this.authservice.validateUser(dto.username, dto.password);
		const token = await this.authservice.login(dto, res);
		res.send(token);
	}

	@Post('intralogin')
	async intralogin( @Res() res: any,@Req() req: any) {
		const token = await this.authservice.intralogin(res, req.body.code);
		res.send(token);
	}

	@Get('refresh')
	async refresh(@Res() res: any, @Req() req: any) {
		const token = await this.authservice.refresh(res, req.cookies.refresh_token);
		res.send({
			access_token: token
		});
	}
	
	@Post('logout')
	@HttpCode(HttpStatus.OK)
	@UseGuards(JwtAuthGuard)
	async logout(@Res() res: any, @Req() req: any) {
		const result = await this.authservice.logout(res, req.cookies.refresh_token);
		res.send({ result });
	}

	@Get('2fa/activate')
	@UseGuards(JwtAuthGuard)
	async activate2fa(@Req() req: any) {
		const response = await this.authservice.activate2fa(req)
		return { imagePath: response };
	}

	@Post('2fa/confirm')
	@UseGuards(JwtAuthGuard)
	async confirm2fa(@Req() req: any) {
		const response = await this.authservice.confirm2fa(req);
		return response ;
	}

	@Post('2fa/login')
	@UseGuards(JwtAuthGuard)
	async login2fa(@Res() res: any, @Req() req: any) {
		const response = await this.authservice.login2fa(res, req);
		res.send(response);
	}
}