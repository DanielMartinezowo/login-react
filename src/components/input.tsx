import type { IconProps } from './IconBase';
import { cn } from '../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  Icon?: React.ComponentType<IconProps>;
  iconSize?: 'sm' | 'md' | 'lg';
  iconPlacement?: 'label' | 'inside';
  IconEye?: React.ComponentType<IconProps>;
  eyeClick?: () => void;
}
export function Input({
  label,
  type = 'text',
  id,
  className,
  iconSize = 'sm',
  iconPlacement = 'label',
  Icon,
  IconEye,
  eyeClick,
  ...rest
}: InputProps) {
  const isIconInLabel = Icon && iconPlacement === 'label';
  const isIconInside = Icon && iconPlacement === 'inside';
  return (
    <div className=' w-full h-full mb-5 flex flex-col text '>
      <label
        htmlFor={id}
        className='text-primary text-sm mb-2 ml-2.5 flex items-center gap-1.5 font-medium'
      >
        {isIconInLabel && <Icon size={iconSize} />}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {isIconInside && (
          <Icon
            size={iconSize}
            className='text-primary absolute left-4 top-1/2 -translate-y-1/2 '
          />
        )}

        <input
          type={type}
          id={id}
          {...rest}
          required
          className={cn(
            'w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none transition-all duration-300 bg-white text-gray-800 text-[15px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-primary',
            isIconInside ? 'pl-11' : 'pl-5',
            IconEye ? '' : ''
          )}
        />
        {IconEye && (
          <IconEye
            size={iconSize}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-primary cursor-pointer hover:text-primary-hover transition-colors duration-300'
            onClick={eyeClick}
          />
        )}
      </div>
    </div>
  );
}
