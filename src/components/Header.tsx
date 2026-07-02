import type { IUser } from '../users/IUser';
import { UserMenu } from './UserDropDownMenu';

interface headerProps {
  user?: IUser | null;
  logoText?: string;
  badgeText?: string;
  onLogout?: () => void;
}

export function Header({ user, onLogout, logoText, badgeText }: headerProps) {
  return (
    <header className='sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-500/20 px-6 py-3'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <span className='text-xl font-bold  bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            {logoText}
          </span>
          <span className='text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full'>
            {badgeText}
          </span>
        </div>
        <div className='flex items-center'>
          {user && <UserMenu user={user} onLogout={onLogout}></UserMenu>}
        </div>
      </div>
    </header>
  );
}
