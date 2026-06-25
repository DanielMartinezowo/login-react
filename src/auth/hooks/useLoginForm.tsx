import { useState } from 'react';
import type React from 'react';

import { notify } from '../../utils/notify';
import { authService } from '../../services/authServices';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPass, setShowPass] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const formValid = email.trim() !== '' && password.trim() !== '' && !isLoading;

  const [authError, setAuthError] = useState<string | undefined>(undefined);

  const handleChangeEmail = (val: string) => {
    setEmail(val);
    if (authError) setAuthError(undefined);
  };

  const handleChangePassword = (val: string) => {
    setPassword(val);
    if (authError) setAuthError(undefined);
  };

  const sendForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) return;
    setIsLoading(true);
    setAuthError(undefined);

    try {
      const foundUser = await authService.login(email, password);
      notify.succes(`Bienvenido ${foundUser.name}`);
      setEmail('');
      setPassword('');
    } catch (error) {
      notify.error('Correo o Contraseña incorrectos');
      setAuthError('invalid');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail: handleChangeEmail,
    setPassword: handleChangePassword,
    sendForm,
    showPass,
    setShowPass,
    formValid,
    isLoading,
    authError,
  };
}
