import { LoginForm } from '../auth/LogingForm';
import { RegisterForm } from '../auth/RegisterForm';
import { DashboardView } from '../auth/DashBoardView';
import { useAuth } from '../auth/services/authContextToken';
import { useState } from 'react';

type authView = 'login' | 'register' | 'dashboard';

export function MapRoutes() {
  const { loggedUser, isAuthLoading } = useAuth();
  const [currentView, setCurrentView] = useState<authView>('login');

  if (isAuthLoading) {
    return console.log('cerrando sesion');
  }

  if (loggedUser) {
    return <DashboardView />;
  }

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      {currentView === 'login' && (
        <LoginForm loginView={() => setCurrentView('register')} onLoginSuccess={() => {}} />
      )}
      {currentView === 'register' && (
        <RegisterForm registerView={() => setCurrentView('login')}></RegisterForm>
      )}
    </div>
  );
}
