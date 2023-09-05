import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express"
import { AuthService } from "../auth.service";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
	constructor(private authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				RefreshStrategy.ExtractJwtFromCookie,
			]),
			secretOrKey: process.env.REFRESH_SECRET,
			passReqToCallback: true,
		});
	}

	private static ExtractJwtFromCookie(req: Request): string | null {
		if (!req.cookies || !req.cookies.refresh_token )
			return null;
		return req.cookies.refresh_token;
	}

	async validate(req: Request, payload: any) {
		const dbToken = await this.authService.verifyFamilyInDb(payload);
		if (!dbToken)
			throw new UnauthorizedException();
		console.log('test3');
		const inDb = await this.authService.isReuse(dbToken, req.cookies.refresh_token);
		if (!inDb)
		{
			this.authService.deleteIfReuse(payload);
			console.log('test2');
			throw new UnauthorizedException();
		}
		console.log('test');
		return { userId: payload.sub, username: payload.token_family };
	}
}