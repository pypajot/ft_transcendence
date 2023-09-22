import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		});
	}
   
	async validate(payload: any) {
		const user = await this.prisma.user.findUnique({
			where: { id: payload.sub }
		})
		if (user.twoFactorAuthActive && !payload.twofactor_on)
			throw new UnauthorizedException('Two factor authentication needed');
		return { userId: payload.sub, username: payload.username };
	}
}
