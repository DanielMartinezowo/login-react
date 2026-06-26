import type { IUser } from '../users/IUser';

export interface IAuthDataSource {
  login(email: string, password: string): Promise<IUser>;
}
export class AuthMemoryDataSource implements IAuthDataSource {
  private users: IUser[] = [
    { name: 'Ana García', email: 'ana.garcia@hotmail.com', password: 'token_seguro_123' },
    { name: 'Carlos Ruiz', email: 'cruiz_dev@gmail.com', password: 'miPassword2026' },
    { name: 'Elena Martínez', email: 'elena.mtz@gmail.com', password: 'qwerty_987' },
    { name: 'daniel martinez', email: 'danielmtzcastro202@gmail.com', password: '123456' },
  ];
  async login(email: string, password: string): Promise<IUser> {
    const userFound = this.users.find((u) => u.email === email && u.password === password);
    if (userFound) {
      return userFound;
    } else {
      throw new Error('Correo o contraseña invalidos');
    }
  }
}
