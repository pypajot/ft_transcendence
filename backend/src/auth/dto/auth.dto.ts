import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
	@IsString()
	@IsNotEmpty()
	@Length(4, 20)
	username: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}