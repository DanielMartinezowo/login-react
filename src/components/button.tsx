interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className=' 
      px-7.5 py-2.5 
      bg-[#824fcf]
     text-white text-[15px] font-semibold 
      rounded-4xl 
      shadow-[0_2px_5px_rgba(0,0,0,0.1)] 
      transition-colors duration-300 ease-in-out
      hover:bg-[#cf4f9c] disabled:bg-[#ccc] disabled:cursor-not-allowed'
    >
      {text}
    </button>
  );
}
