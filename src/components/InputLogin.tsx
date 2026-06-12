import { useState } from 'react';
import { Input } from '../components/Input';
import type { InputProps } from '../components/Input';
import type React from 'react';

interface InputPasswordProps extends Omit<InputProps, 'type' | 'iconRight'> {
  iconShow: React.ReactNode;
  iconHide: React.ReactNode;
}

export function InputPassword({ iconShow, iconHide, ...rest }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      {...rest}
      type={showPassword ? 'text' : 'password'}
      iconRight={
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='flex items-center justify-center cursor-pointer text-primary transition-colors focus:outline'
        >
          {showPassword ? iconHide : iconShow}
        </button>
      }
    />
  );
}
