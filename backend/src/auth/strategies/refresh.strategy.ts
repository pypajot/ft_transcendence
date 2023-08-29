import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express"
import { AuthService } from "../auth.service";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy) {
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
		if (!req.signedCookies || !req.signedCookies.refresh_token )
			return null;
		return req.signedCookies.access_token;
	}

	async validate(req: Request, payload: any) {
		const dbToken = await this.authService.verifyFamilyInDb(payload);
		if (!dbToken)
			throw new UnauthorizedException();
		if (this.authService.isReuse(dbToken, req.signedCookies.refresh_token))
		{
			this.authService.deleteIfReuse(payload);
			throw new UnauthorizedException();
		}
		return { userId: payload.sub, username: payload.token_family };
	}
}