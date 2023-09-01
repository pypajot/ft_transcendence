import { Controller, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Post } from '@nestjs/common/decorators';
import { AuthDto } from '../dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log(dto);
        return this.userService.signup(dto);
    }
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.userService.signin(dto.username, dto.password);
    }
}
