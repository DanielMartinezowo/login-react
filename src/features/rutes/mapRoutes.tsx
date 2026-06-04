import { LoginForm } from './/../auth/LogingForm';
import { RegisterForm } from './/../auth/RegisterForm';
import { useState } from 'react';

type authView = 'login' | 'register';

export function MapRoutes() {
  const [currentView, setCurrentView] = useState<authView>('login');

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      {currentView === 'login' && (
        <LoginForm loginView={() => setCurrentView('register')}></LoginForm>
      )}
      {currentView === 'register' && (
        <RegisterForm registerView={() => setCurrentView('login')}></RegisterForm>
      )}
    </div>
  );
}
