import { UserDTO } from './dto/user.dto';

export class UserAPI {
	public static async getUser(): Promise<UserDTO> {

		const response = await fetch('http://localhost:3333/api/user/1', {
			mode: 'cors',
			method: 'GET'
		});
		const data = await response.json();

		return (data);
	}
}