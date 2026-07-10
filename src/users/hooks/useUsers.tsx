import { useState, useEffect } from 'react';
import type { IUser } from '../IUser';
import { userService } from '../../auth/services/userServices';

export const useUsers = () => {
  const [user, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const data = await userService.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Falla en muestra de los usuarios');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers;
  }, []);
  return { user, isLoading };
};
