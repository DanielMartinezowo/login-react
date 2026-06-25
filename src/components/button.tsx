import { IconSpinner } from './Spinner';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

export function Button({ text, isLoading = false, disabled, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className={cn(
        'flex items-center gap-2 px-7.5 py-2.5 text-white text-[15px] font-semibold rounded-4xl shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-colors duration-300 ease-in-out',
        disabled || isLoading
          ? 'bg-[#ccc] cursor-not-allowed'
          : 'bg-primary hover:bg-primary-hover',
        className
      )}
    >
      {isLoading && <IconSpinner className='text-white' />}

      {text}
    </button>
  );
}
