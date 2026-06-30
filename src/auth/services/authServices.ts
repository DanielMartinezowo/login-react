import { AuthMemoryDataSource, type IAuthDataSource } from '../datasource/authDatasource';
import { DelayedAuthDataSource } from '../datasource/delayedDatasource';
import type { IUser } from '../../users/IUser';
import { tokenStorage } from './authTokenStorage';

export class AuthService {
  dataSource: IAuthDataSource;
  constructor(dataSource: IAuthDataSource) {
    this.dataSource = dataSource;
  }
  async login(email: string, password: string): Promise<IUser> {
    const cleanEmail = email.trim().toLocaleLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      throw new Error('correo y contraseña no pueden estar vacios');
    }

    const token = await this.dataSource.login(cleanEmail, cleanPassword);
    if (!token) {
      throw new Error('no se recibio un token valido en el origen de datos');
    }
    tokenStorage.save(token);

    const loadBase64 = token.split('.')[1];
    const user = JSON.parse(atob(loadBase64)) as IUser;

    if (!user || !user.email || !user.name) {
      throw new Error('la respuesta del origen de datos esta imcompleta');
    }
    return user;
  }
}

const myMemoryDataSource = new AuthMemoryDataSource();
const timedDataSource = new DelayedAuthDataSource(myMemoryDataSource, true);
export const authService = new AuthService(timedDataSource);
