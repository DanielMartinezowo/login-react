import { useState, useRef, useEffect } from 'react';
import type { IUser } from '../users/IUser';
import { IconExit } from './icons';

interface UserMenuProps {
  user: IUser;
  onLogout?: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-blue-200 border border-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        <span className='text-sm font-bold text-blue-700'>{initial}</span>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-72 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-xl z-50 overflow-hidden'>
          <div className='p-5 flex flex-col items-center border-b bg-blue-600/25 border-gray-100'>
            <div className='w-14 h-14 rounded-full bg-blue-50 text-4xl font-bold text-blue-400 flex items-center justify-center'>
              <span className='text-3xl font-bold text-blue-600'>{initial}</span>
            </div>
            <p className='text-sm font-semibold text-gray-800 text-center w-full truncate'>
              {user.name}
            </p>
            <p className='text-xs text-gray-500 text-center w-full truncate mt-0.5'>{user.email}</p>
          </div>
          <div className='p-2'>
            <button
              onClick={onLogout}
              className='w-full px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left flex items-center space-x-2'
            >
              <IconExit />
              <span>Cerrar Sesion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
