import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { UserTable } from '../components/UserTable';
import { useUsers } from '../users/hooks/useUsers';

export function DashboardView() {
  const { user, isLoading } = useUsers();
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />
      <main className='flex grow p-9'>
        <h1 className='text-2xl  font-bold mb-6 text-gray-700'>Panel de usuarios</h1>
        {isLoading ? (
          <div className='text-gray-200 font-medium'>Cargando usuarios</div>
        ) : (
          <UserTable users={user} />
        )}
      </main>
      <Footer />
    </div>
  );
}
