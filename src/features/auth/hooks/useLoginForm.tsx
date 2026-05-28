import { useState } from 'react';
import { users } from '../users/user-static';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const formValid = email.trim() !== '' && password.trim() !== '';
  const sendForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userFound = users.find((u) => u.email === email && u.password === password);
    if (userFound) {
      alert(`Bienvenido, ${userFound.name}`);
    } else {
      alert('Correo o contraseña incorrectos');
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
