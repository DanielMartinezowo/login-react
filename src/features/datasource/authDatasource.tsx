import { users } from '../users/user-static';
import type { IUser } from '../users/IUser';

export const findUserData = async (email: string, password: string): Promise<IUser | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((u) => u.email === email && u.password === password);
      resolve(user);
    }, 2500);
  });
};
