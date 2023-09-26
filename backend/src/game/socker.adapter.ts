import { INestApplicationContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IoAdapter } from '@nestjs/platform-socket.io';

export class AuthenticatedSocketIoAdapter extends IoAdapter {
  private readonly jwtService: JwtService;
  constructor(private app: INestApplicationContext) {
    super(app);
    this.jwtService = this.app.get(JwtService);
  }

  createIOServer(port: number, options?: any): any {
    options.allowRequest = async (request, allowFunction) => {
      const token = request._query?.token;
      try {
        const verified =
          token !== 'null' &&
          (await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_SECRET,
          }));
      } catch (e) {
        console.log('failed connection');
        return allowFunction("Unauthorized", false);
      }
      return allowFunction(null, true);
    };

    return super.createIOServer(port, options);
  }
}
