import { useState } from 'react';
import { users } from '../users/user-static';
import { notify } from '../../../utils/notify';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const formValid = email.trim() !== '' && password.trim() !== '';

  const sendForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userFound = users.find((u) => u.email === email && u.password === password);
    if (userFound) {
      notify.succes(`Bienvenido ${userFound.name}`);
    } else {
      notify.error('Correo o contrasena incorrectos');
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
  };
}
