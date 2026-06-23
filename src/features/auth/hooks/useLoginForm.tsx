import { useState } from 'react';

import { notify } from '../../../utils/notify';
import { authService } from '../../services/authServices';

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
      const foundUser = await authService.login(email, password);
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
