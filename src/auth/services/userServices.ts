import { myMemoryDataSource, type IUserDataSource } from '../../auth/datasource/authDatasource';
import type { IUser } from '../../users/IUser';

export class UserService {
  private dataSource: IUserDataSource;
  constructor(dataSource: IUserDataSource) {
    this.dataSource = dataSource;
  }
  async getAllUsers(): Promise<IUser[]> {
    return await this.dataSource.getUsers();
  }
}

export const userService = new UserService(myMemoryDataSource);
