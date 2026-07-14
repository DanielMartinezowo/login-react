import { IconSpinner } from './Spinner';
import { cn } from '../utils/cn';

type ButtonVariants = 'primary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  variant?: ButtonVariants;
}
export function Button({
  text,
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const variantStyles = {
    primary:
      'px-7.5 py-2.5 text-white text-[15px] bg-primary enabled:hover:bg-primary-hover rounded-4xl shadow-[0_2px_5px_rgba(0,0,0,0.1)] enabled:active:scale-95',
    danger: 'w-full px-4 py-2.5 text-sm text-red-600 enabled:hover:bg-red-50 rounded-xl text-left',
  };
  const disabledStyles =
    disabled || isLoading
      ? variant === 'primary'
        ? 'disabled:bg-gray-200 disabled:text-gray-400 cursor-not-allowed'
        : 'disabled:text-gray-400 cursor-not-allowed opacity-50 bg-transparent shadow-none'
      : '';
  return (
    <button
      disabled={disabled || isLoading}
      {...rest}
      className={cn(
        'flex items-center gap-2 font-semibold transition-all duration-300 ease-in-out',
        variantStyles[variant],
        disabledStyles,
        className
      )}
    >
      {isLoading && (
        <IconSpinner className={variant === 'primary' ? 'text-gray-400' : 'text-red-500'} />
      )}
      {children || text}
    </button>
  );
}
