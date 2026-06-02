import { IconSpinner } from './icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export function Button({ text, isLoading = false, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className=' 
      flex items-center gap-2
      px-7.5 py-2.5 
      bg-[#824fcf]
     text-white text-[15px] font-semibold 
      rounded-4xl 
      shadow-[0_2px_5px_rgba(0,0,0,0.1)] 
      transition-colors duration-300 ease-in-out
      hover:bg-[#cf4f9c] disabled:bg-[#ccc] disabled:cursor-not-allowed'
    >
      {isLoading && <IconSpinner size={18} className='text-white' />}

      {text}
    </button>
  );
}
