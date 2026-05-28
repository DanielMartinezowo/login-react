import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useLoginForm } from './hooks/useLoginForm';
import type React from 'react';

interface registerProps {
  switchView: () => void;
}
export function RegisterForm({ switchView }: registerProps) {
  const { showPass, setShowPass, formValid } = useLoginForm();
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
            <strong>Crea una cuenta</strong>, usa tu email para registrarte
          </p>
          <p className='text-lg opacity-90'>
            <strong>ya tienes una cuenta? </strong>haz click <strong>para iniciar sesion</strong>
          </p>
        </div>
        <Button type='button' text='Iniciar Sesión' id='sign-up' onClick={switchView} />
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
          name='email'
          placeholder='Introduce un nombre de usuario'
          iconClass='bx bx-user'
        />
        <Input
          label='Correo Electronico'
          type='email'
          id='register-email'
          name='email'
          placeholder='Introduce tu correo'
          iconClass='bx bx-envelope'
        />
        <Input
          label='Contraseña'
          type={showPass ? 'text' : 'password'}
          id='register-password'
          name='password'
          placeholder='Introduce tu contraseña'
          iconClass='bx-lock-alt'
          hasIconEye={true}
          typeOfEyeIcon={showPass ? 'bx-hide' : 'bx-show-alt'}
          eyeClick={() => setShowPass(!showPass)}
        />
        <Input
          label='Verfica tu contraseña'
          type={showPass ? 'text' : 'password'}
          id='register-repassword'
          name='password'
          placeholder='Introduce tu contraseña'
          iconClass='bx-lock-alt'
          hasIconEye={true}
          typeOfEyeIcon={showPass ? 'bx-hide' : 'bx-show-alt'}
          eyeClick={() => setShowPass(!showPass)}
        />
        <Button type='submit' disabled={!formValid} text='Crear ' />
      </form>
    </section>
  );
}
