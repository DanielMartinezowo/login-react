import { AuthMemoryDataSource, type IAuthDataSource } from '../datasource/authDatasource';
import type { IUser } from '../users/IUser';

export class AuthService {
  dataSource: IAuthDataSource;
  constructor(dataSource: IAuthDataSource) {
    this.dataSource = dataSource;
  }
  async login(email: string, password: string): Promise<IUser> {
    const user = await this.dataSource.login(email, password);
    const cleanEmail = email.trim().toLocaleLowerCase;
    const cleanPassword = password.trim;

    if (!cleanEmail || !cleanPassword) {
      throw new Error('correo y contraseña no pueden estar vacios');
    }

    if (!user || typeof user === 'undefined' || !user.email || !user.name) {
      throw new Error('la respuesta del origen de datos esta imcompleta');
    }
    return user;
  }
}

const myMemoryDataSource = new AuthMemoryDataSource();
export const authService = new AuthService(myMemoryDataSource);
