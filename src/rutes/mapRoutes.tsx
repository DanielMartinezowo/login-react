import { LoginForm } from '../auth/LogingForm';
import { RegisterForm } from '../auth/RegisterForm';
import { DashboardView } from '../auth/DashBoardView';
import { useState } from 'react';

type authView = 'login' | 'register' | 'dashboard';

export function MapRoutes() {
  const [currentView, setCurrentView] = useState<authView>('login');

  if (currentView === 'dashboard') {
    return <DashboardView />;
  }

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      {currentView === 'login' && (
        <LoginForm
          loginView={() => setCurrentView('register')}
          onLoginSuccess={() => setCurrentView('dashboard')}
        />
      )}
      {currentView === 'register' && (
        <RegisterForm registerView={() => setCurrentView('login')}></RegisterForm>
      )}
    </div>
  );
}
