import { Button } from '../../components/button';
import { useState } from 'react';
import { Input } from '../../components/input';
import { useLoginForm } from './hooks/useLoginForm';
export function LoginForm() {
  const { email, setEmail, password, setPassword, sendForm } = useLoginForm();
  const [showPass, setShowPass] = useState(false);

  const formValid = email.trim() !== '' && password.trim() !== '';

  return (
    <section className='container-form login w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-100'>
      <aside
        className='information w-full md:w-1/2 bg-linear-to-br
       from-purple-600 to-indigo-700 text-white 
      p-5 flex flex-col justify-center items-center text-center'
      >
        <div className='mb-5'>
          <h2 className='text-3xl font-bold tracking-wide mb-5.5'>Bienvenido de vuelta!</h2>
          <p className='text-lg opacity-90'>
            <strong>Inicia Sesion</strong> con tus datos
          </p>
          <p className='text-lg opacity-75'>o</p>
          <p className='text-lg opacity-90'>
            <strong>Haz click </strong>para crear una <strong>cuenta nueva</strong>
          </p>
        </div>
        <Button type='button' text='Registrarse' id='sign-up' />
      </aside>

      <form
        onSubmit={sendForm}
        className='w-full md:w-1/2 p-12 flex flex-col justify-center items-center bg-white'
      >
        <h2 className='text-2xl font-bold text-gray-800 mb-2 text-center'>Inicia Sesión</h2>
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
          typeOfEyeIcon={showPass ? 'bx-hide' : 'bx-show-alt'}
          eyeClick={() => setShowPass(!showPass)}
        />
        <Button type='submit' disabled={!formValid} text='Inicia Sesion' />
      </form>
    </section>
  );
}
