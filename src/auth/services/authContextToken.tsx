import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { IUser } from '../../users/IUser';
import { tokenStorage } from './authTokenStorage';
import { authService } from './authServices';

export interface authContextTokeType {
  loggedUser: IUser | null;
  login: (user: IUser) => void;
  logout: () => Promise<void>;
  isAuthLoading: boolean;
}
const AuthContext = createContext<authContextTokeType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  useEffect(() => {
    const token = tokenStorage.get();
    if (token) {
      try {
        const loadBase64 = token.split('.')[1];
        const user = JSON.parse(atob(loadBase64)) as IUser;
        setLoggedUser(user);
      } catch (error) {
        tokenStorage.clear();
      }
    }
    setIsAuthLoading(false);
  }, []);

  const login = (user: IUser) => {
    setLoggedUser(user);
  };
  const logout = async () => {
    try {
      await authService.logout();
      setLoggedUser(null);
    } catch (error) {
      console.error('error al cerrar sesion: ', error);
    } finally {
    }
  };
  return (
    <AuthContext.Provider value={{ loggedUser, login, logout, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}
