import { IsNotEmpty, IsString } from 'class-validator'

export class PrivMsgLogsDto {
	@IsNotEmpty()
	@IsString()
	sender: string;
	@IsNotEmpty()
	@IsString()
	receiver: string;
}