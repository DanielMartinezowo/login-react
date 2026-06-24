import type React from 'react';
import { cn } from '../utils/cn';

type TypesInput = 'text' | 'email' | 'password' | 'number';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type: TypesInput;
}
const positionIcons = {
  iconRight: 'absolute right-4 top-1/2 -translate-y-1/2 text-primary',
};
export function Input({ label, type, id, className, iconLeft, iconRight, ...rest }: InputProps) {
  return (
    <div className='w-full h-full mb-5 flex flex-col'>
      <label
        htmlFor={id}
        className={cn('text-primary text-sm mb-2 ml-3 flex items-center gap-1.5 font-medium')}
      >
        {iconLeft}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {iconRight && <div className={positionIcons.iconRight}>{iconRight}</div>}

        <input
          type={type}
          id={id}
          {...rest}
          required
          className={cn(
            'w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none transition-all duration-300 bg-white text-gray-800 text-[15px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-primary',
            iconRight && 'pr-12'
          )}
        />
      </div>
    </div>
  );
}
