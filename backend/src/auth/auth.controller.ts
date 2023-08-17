import { Controller, Post, Body, Get, UseGuards} from "@nestjs/common";
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
	login(@Body() dto: AuthDto) {
		return this.authservice.login(dto);
	}

	
}