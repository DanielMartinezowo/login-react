import type { IUser } from '../users/IUser';
import { Button } from './button';

interface headerProps {
  user: IUser | null;
  onLogout: () => void;
}

export function Header({ user, onLogout }: headerProps) {
  return (
    <header className='sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-6 py-3'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <span className='text-xl font-bold  bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Sitcicl
          </span>
          <span className='text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full'>
            Panel
          </span>
        </div>
        <div className='flex items-center space-x-6'>
          {user && (
            <div className='text-right hidden sm:block'>
              <p className='text-sm font-semibold text-gray-800'>{user.name}</p>
              <p className='text-sm text-gray-500'>{user.email}</p>
            </div>
          )}
          <button
            onClick={onLogout}
            className='px-4 py-2 text-sm font-medium text-red-500 bg-red-50 hover:bg-red-50 border border-red-200/50 hover:border-red-200 rounded-lg transition-all duration-200 active:scale-95 '
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
}
