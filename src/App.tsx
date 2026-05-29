import { LoginForm } from './features/auth/LogingForm';
import { RegisterForm } from './features/auth/RegisterForm';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [alternateViews, setAlternateViews] = useState(true);

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      {alternateViews ? (
        <LoginForm switchView={() => setAlternateViews(false)} />
      ) : (
        <RegisterForm switchView={() => setAlternateViews(true)} />
      )}
    </div>
  );
}

export default App;
