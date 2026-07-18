import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { UserTable } from '../components/UserTable';
import { useUsers } from '../users/hooks/useUsers';
import { useAuth } from './services/authContextToken';

export function DashboardView() {
  const { loggedUser, logout } = useAuth();
  const { user } = useUsers();
  return (
    <div className='min-h-screen bg-ui-bg flex flex-col items-center'>
      <Header logoText='Siticl' badgeText='Panel Usuarios' user={loggedUser} onLogout={logout} />
      <main className='bg-white rounded-2xl shadow-sm border border-gray-100 grow p-10 mt-4 mb-4'>
        <h1 className='text-2xl  font-bold mb-6 text-ui-text'>Usuarios en sistema</h1>
        <UserTable users={user} />
      </main>
      <Footer />
    </div>
  );
}
