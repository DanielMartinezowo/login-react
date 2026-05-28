import type React from 'react';

export type IconName = 'email' | 'lock' | 'eye-show' | 'eye-hide' | 'user';

const IconMap: Record<IconName, string> = {
  email: 'bx bx-envelope',
  lock: 'bx bx-lock-alt',
  'eye-hide': 'bx bx-show-alt',
  'eye-show': 'bx bx-hide',
  user: 'bx bx-user',
};

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconName;
  position?: 'left' | 'right' | 'none';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export function Icon({ name, position = 'none', size = 'md', className = '', ...rest }: IconProps) {
  const sizesClass = {
    sm: 'text-[14px]',
    md: 'text-[18px]',
    lg: 'text-[22px]',
  };
  const positionClasses = {
    none: '',
    left: 'absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300',
    right: 'absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300',
  };
  const boxiconClass = IconMap[name];
  return (
    <i
      className={`${boxiconClass} ${sizesClass[size]} ${positionClasses[position]} ${className}`}
      {...rest}
    />
  );
}
