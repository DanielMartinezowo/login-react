import { AuthMemoryDataSource, type IAuthDataSource } from '../datasource/authDatasource';
import type { IUser } from '../users/IUser';

export class AuthService {
  dataSource: IAuthDataSource;
  constructor(dataSource: IAuthDataSource) {
    this.dataSource = dataSource;
  }
  async login(email: string, password: string): Promise<IUser> {
    const user = await this.dataSource.login(email, password);
    return user;
  }
}

const myMemoryDataSource = new AuthMemoryDataSource();
export const authService = new AuthService(myMemoryDataSource);
