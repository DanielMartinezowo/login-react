import { findUserData } from '../datasource/authDatasource';
import type { IUser } from '../../features/users/IUser';

export const formValidateLogin = async (email: string, password: string): Promise<IUser> => {
  const userFound = await findUserData(email, password);
  const emailsValids = ['@gmail.com', '@hotmail.com', '@siticl.com'];
  const isValidDomain = emailsValids.some((domain) => userFound?.email.endsWith(domain));
  if (!userFound) {
    throw new Error('Correo o contraseña incorrectos');
  }
  if (!isValidDomain) {
    throw new Error('tu dominio de correo no esta permitido');
  }
  return userFound;
};
