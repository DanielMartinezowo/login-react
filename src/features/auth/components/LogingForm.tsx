import React, { useState } from 'react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { users } from '../users/user-static';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPass, setShowPass] = useState(false);

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userFound = users.find((u) => u.email === email && u.password === password);
    if (userFound) {
      alert(`Bienvenido, ${userFound.name}`);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };
  const formValid = email.trim() !== '' && password.trim() !== '';

  return (
    <form onSubmit={sendForm} className='w-full flex flex-col items-center'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Inicia Sesion</h2>
      <Input
        label='Correo Electronico'
        type='email'
        id='login-email'
        name='email'
        placeholder='Introduce tu correo'
        iconClass='bx bx-envelope'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label='Contraseña'
        type={showPass ? 'text' : 'password'}
        id='login-password'
        name='password'
        placeholder='Introduce tu contraseña'
        iconClass='bx-lock-alt'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        hasIconEye={true}
        typeOfEyeIcon={showPass ? 'bx-hide' : 'bx-lock-alt'}
        eyeClick={() => setShowPass(!showPass)}
      />
      <Button type='submit' disabled={!formValid} text='Inicia Sesion' />
    </form>
  );
}
