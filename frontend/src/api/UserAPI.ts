import { UserDTO } from './dto/user.dto';

export class UserAPI {
	public static async getUser(): Promise<UserDTO> {

		const response = await fetch('/user/1', {
			method: 'GET'
		});
		const data = await response.json();

		return (data);
	}
}