import type { IconProps } from './icons';

import type React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  position?: 'iconLeft' | 'iconRight' | 'none';
  Icon?: React.ComponentType<IconProps>;
  IconEye?: React.ComponentType<IconProps>;
  iconOut?: React.ReactNode;
  eyeClick?: () => void;
}
const positionIcons = {
  iconLeft: 'absolute left-4 top-1/2 -translate-y-1/2 text-primary',
  iconRight: 'absolute right-4 top-1/2 -translate-y-1/2 text-primary',
};
export function InputLogin({
  label,
  type = 'text',
  id,
  className,
  Icon,
  iconOut,
  position = 'none',
  IconEye,
  children,
  eyeClick,
  ...rest
}: InputProps) {
  return (
    <div className=' w-full h-full mb-5 flex flex-col text '>
      <label
        htmlFor={id}
        className='text-primary text-sm mb-2 ml-3 flex items-center gap-1.5 font-medium'
      >
        {iconOut}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {children}
        <input
          type={type}
          id={id}
          {...rest}
          required
          className={` w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none transition-all duration-300 bg-white text-gray-800 text-[15px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-primary
            ${IconEye ? '' : ''}`}
        />
        {IconEye && (
          <IconEye
            className={`text-primary cursor-pointer hover:text-primary-hover transition-colors duration-300 size-6 ${positionIcons.iconRight}`}
            onClick={eyeClick}
          />
        )}
      </div>
    </div>
  );
}
