import { useState } from 'react';
import type { IUser } from '../users/IUser';
import { users } from '../users/user-static';
import { notify } from '../../../utils/notify';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPass, setShowPass] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const formValid = email.trim() !== '' && password.trim() !== '' && !isLoading;

  const sendForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) return;
    setIsLoading(true);

    try {
      const foundUser = await new Promise<IUser>((resolve, reject) => {
        setTimeout(() => {
          const userFound = users.find((u) => u.email === email && u.password === password);
          if (userFound) resolve(userFound);
          else reject(new Error('Correo o contraseña incorrectos'));
        }, 2500);
      });
      notify.succes(`Bienvenido ${foundUser.name}`);
    } catch (error) {
      notify.error('Correo o Contraseña incorrectos');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    sendForm,
    showPass,
    setShowPass,
    formValid,
    isLoading,
  };
}
