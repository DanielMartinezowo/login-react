import type React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconLabel?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
const positionIcons = {
  iconLeft: 'absolute left-4 top-1/2 -translate-y-1/2 text-primary',
  iconRight: 'absolute right-4 top-1/2 -translate-y-1/2 text-primary',
};
export function Input({
  label,
  type,
  id,
  className,
  iconLeft,
  iconRight,
  iconLabel,
  children,
  ...rest
}: InputProps) {
  return (
    <div className=' w-full h-full mb-5 flex flex-col text '>
      <label
        htmlFor={id}
        className='text-primary text-sm mb-2 ml-3 flex items-center gap-1.5 font-medium'
      >
        {iconLabel}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {iconRight && <div className={positionIcons.iconRight}>{iconRight}</div>}
        {iconLeft && <div className={positionIcons.iconLeft}>{iconLeft}</div>}
        {children}
        <input
          type={type}
          id={id}
          {...rest}
          required
          className='w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none transition-all duration-300 bg-white text-gray-800 text-[15px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-primary'
        />
      </div>
    </div>
  );
}
