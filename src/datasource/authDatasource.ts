import { users as staticUsers } from '../users/user-static';
import type { IUser } from '../users/IUser';

export interface IAuthDataSource {
  login(email: string, password: string): Promise<IUser>;
}
export class AuthMemoryDataSource implements IAuthDataSource {
  async login(email: string, password: string): Promise<IUser> {
    const userFound = staticUsers.find((u) => u.email === email && u.password === password);
    if (userFound) {
      return userFound;
    } else {
      throw new Error('Correo o contraseña invalidos');
    }
  }
}
