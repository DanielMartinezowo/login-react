import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useLoginForm } from './hooks/useLoginForm';
import type React from 'react';
import { useState } from 'react';
import { IconEmail, IconHide, IconLock, IconShow, IconUser } from '../../components/icons';

interface registerProps {
  registerView: () => void;
}
export function RegisterForm({ registerView }: registerProps) {
  const { showPass, setShowPass, formValid } = useLoginForm();
  const [showPass2, setShowPass2] = useState(false);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log('Datos enviados:');
    // Aquí puedes llamar a tu API o función de guardado
  };

  return (
    <section className='container-form login w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-100'>
      <aside
        className='information w-full md:w-1/2 bg-linear-to-br
       from-purple-600 to-indigo-700 text-white 
      p-5 flex flex-col justify-center items-center text-center'
      >
        <div className='mb-5'>
          <h2 className='text-3xl font-bold tracking-wide mb-5.5'>Bienvenido!</h2>
          <p className='text-lg opacity-90'>
            <b>Crea una cuenta</b>, usa tu email para registrarte
          </p>
          <p className='text-lg opacity-90'>
            <b>ya tienes una cuenta? </b>haz click <b>para iniciar sesion</b>
          </p>
        </div>
        <Button type='button' text='Iniciar Sesión' id='sign-up' onClick={registerView} />
      </aside>
      <form
        onSubmit={handleSubmit}
        className='w-full md:w-1/2 p-12 flex flex-col justify-center items-center bg-white'
      >
        <h2 className='text-2xl font-bold text-gray-900 mb-2 text-center'>Crear cuenta</h2>

        <Input
          label='Nombre de Usuario'
          type='text'
          id='register-name'
          name='name'
          placeholder='Introduce un nombre de usuario'
          Icon={IconUser}
        />
        <Input
          label='Correo Electronico'
          type='email'
          id='register-email'
          name='email'
          placeholder='Introduce tu correo'
          Icon={IconEmail}
        />
        <Input
          label='Contraseña'
          type={showPass ? 'text' : 'password'}
          id='register-password'
          name='password'
          placeholder='Introduce tu contraseña'
          Icon={IconLock}
          IconEye={showPass ? IconHide : IconShow}
          eyeClick={() => setShowPass(!showPass)}
        />
        <Input
          label='Verfica tu contraseña'
          type={showPass2 ? 'text' : 'password'}
          id='register-repassword'
          name='password'
          placeholder='Introduce tu contraseña'
          Icon={IconLock}
          IconEye={showPass2 ? IconHide : IconShow}
          eyeClick={() => setShowPass2(!showPass2)}
        />
        <Button type='submit' disabled={!formValid} text='Crear ' />
      </form>
    </section>
  );
}
