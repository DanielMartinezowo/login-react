import { Button } from '../../components/button';
import { IconEmail, IconHide, IconLock, IconShow } from '../../components/icons';
import { InputLogin } from '../../components/InputLogin';
import { Input } from '../../components/Input';
import { useLoginForm } from './hooks/useLoginForm';

interface loginProps {
  loginView: () => void;
}
export function LoginForm({ loginView }: loginProps) {
  const { email, setEmail, password, setPassword, sendForm, formValid, isLoading } = useLoginForm();

  return (
    <section className='w-full max-w-4xl bg-white rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-100'>
      <aside
        className='w-full md:w-1/2 bg-linear-to-br
       from-primary to-indigo-700 text-white 
      p-5 flex flex-col justify-center items-center text-center'
      >
        <div className='mb-5'>
          <h2 className='text-3xl font-bold tracking-wide mb-5.5'>Bienvenido de vuelta!</h2>
          <p className='text-lg opacity-90'>
            <b>Inicia Sesion</b> con tus datos
          </p>
          <p className='text-lg opacity-75'>o</p>
          <p className='text-lg opacity-90'>
            <b>Haz click </b>para crear una <b>cuenta nueva</b>
          </p>
        </div>
        <Button type='button' text='Registrarse' id='sign-up' onClick={loginView} />
      </aside>

      <form
        onSubmit={sendForm}
        className='w-full relative md:w-1/2 p-12 flex flex-col justify-center items-center bg-white'
      >
        <h2 className='text-2xl font-bold text-gray-800 mb-2 text-center'>Inicia Sesión</h2>

        <Input
          label='Correo Electronico'
          type='email'
          id='login-email'
          name='email'
          placeholder='Introduce tu correo'
          value={email}
          iconLeft={<IconEmail />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLogin
          label='Contraseña'
          id='login-password'
          name='password'
          placeholder='Introduce tu contraseña'
          value={password}
          iconLeft={<IconLock />}
          onChange={(e) => setPassword(e.target.value)}
          iconShow={<IconHide className='size-6 hover:text-primary-hover' />}
          iconHide={<IconShow className='size-6 hover:text-primary-hover' />}
        />
        <Button
          type='submit'
          disabled={!formValid || isLoading}
          isLoading={isLoading}
          text={isLoading ? 'Verificando datos' : 'Inicia Sesion'}
        />
      </form>
    </section>
  );
}
