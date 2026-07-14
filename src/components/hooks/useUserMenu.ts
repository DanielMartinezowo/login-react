import { useState } from 'react';
import type { IUser } from '../../users/IUser';
import { useClickOutside } from './useClickOutside';

export function useUserMenu(user: IUser, onLogout?: () => void | Promise<void>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleLogoutClick = async () => {
    if (!onLogout) return;
    setIsLoggingOut(true);
    try {
      await onLogout();
    } catch (error) {
      console.error('error al cerrar la sesion', error);
      setIsLoggingOut(false);
    }
  };
  const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  return {
    isOpen,
    setIsOpen,
    isLoggingOut,
    menuRef,
    handleLogoutClick,
    initial,
  };
}
