import { LoginForm } from './features/auth/components/LogingForm';
function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-600 flex items-center justify-center p-4'>
        <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default App;
