import type { IUser } from '../users/IUser';
import { IconEmail, IconExit, IconUserHeader } from './icons';
import { Button } from './button';
import { useUserMenu } from './hooks/useUserMenu';
import { cn } from '../utils/cn';

interface UserMenuProps {
  user: IUser;
  onLogout?: () => void | Promise<void>;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  const { isOpen, setIsOpen, isLoggingOut, menuRef, handleLogoutClick, initial } = useUserMenu(
    user,
    onLogout
  );
  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-blue-200 border border-blue-200 transition-colors active:scale-95 focus:animate-pulse focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        <span className='text-sm font-bold text-primary'>{initial}</span>
      </button>

      <div
        className={cn(
          'absolute right-0 mt-2 w-72 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-xl z-50 overflow-hidden',
          'transition-all duration-200 ease-out origin-top-right',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        )}
      >
        <div className='p-5 flex flex-col items-center border-b bg-blue-600/25 border-gray-100'>
          <div className='w-14 h-14 pb-1 rounded-full bg-blue-50 text-4xl font-bold text-blue-400 flex items-center justify-center'>
            <span className='text-3xl font-bold text-blue-600'>{initial}</span>
          </div>
          <p className='text-sm px-4 mt-1.5 font-semibold text-gray-800 truncate text-left flex items-center space-x-1.5'>
            <IconUserHeader />
            <span>{user.name}</span>
          </p>
          <p className='text-xs text-gray-500 truncate text-left flex items-center space-x-1.5'>
            <IconEmail />
            <span>{user.email}</span>
          </p>
        </div>
        <div className='p-2'>
          <Button onClick={handleLogoutClick} variant='danger' isLoading={isLoggingOut}>
            {!isLoggingOut && <IconExit />}
            <span>{isLoggingOut ? 'Cerrando Sesion' : 'Cerrar Sesion'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
