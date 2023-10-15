import { contains, isNotEmpty } from 'class-validator';

export class UserDTO {
    id: number;
    username: string;
    twoFactorAuthActive: boolean;
}
