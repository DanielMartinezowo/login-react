import { users as staticUsers } from '../users/user-static';
import type { IUser } from '../users/IUser';

export interface IAuthDataSource {
  get(email: string, password: string): Promise<IUser>;
}
export class AuthMemoryDataSource implements IAuthDataSource {
  async get(email: string, password: string): Promise<IUser> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userFound = staticUsers.find((u) => u.email === email && u.password === password);
        if (userFound) {
          resolve(userFound);
        } else {
          reject(new Error('Correo o contraseña invalidos'));
        }
      }, 2500);
    });
  }
}
