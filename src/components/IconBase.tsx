import type React from 'react';
import { cn } from '../utils/cn';

export const sizeClasses = {
  sm: 'text-[14px]',
  md: 'text-[18px]',
  lg: 'text-[22px]',
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg';
}
export function IconBase({ size = 'sm', className, children, ...props }: IconProps) {
  const currentSize = sizeClasses[size];
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      width='1.5em'
      height='1.5em'
      viewBox='0 0 24 24'
      className={cn(currentSize, className)}
      {...props}
    >
      {children}
    </svg>
  );
}
