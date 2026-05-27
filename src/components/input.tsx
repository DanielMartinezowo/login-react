interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  iconClass: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasIconEye?: boolean;
  typeOfEyeIcon?: string;
  eyeClick?: () => void;
}
export function Input({
  label,
  type,
  id,
  name,
  placeholder,
  iconClass,
  value,
  onChange,
  hasIconEye = false,
  typeOfEyeIcon = 'bx-show-alt',
  eyeClick,
}: InputProps) {
  return (
    <div className='relative w h-full mb-5 flex flex-col text left-'>
      <label
        htmlFor={id}
        className='text-[#824fcf] text-sm mb-1 ml-2.5 flex items-center gap-1.5 font-medium'
      >
        <i className={`bx ${iconClass} text-[18px]`}></i>
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className='w-full 
      px-5 py-3 
      border border-gray-300 rounded-[20px] outline-none 
      transition-all duration-300 
      bg-white text-gray-800 text-[15px] 
      shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-[#824fcf]'
      />
      {hasIconEye && (
        <i
          className={`bx ${typeOfEyeIcon} absolute bottom-3 right-3.75 
    cursor-pointer 
    text-[18px] text-[#824fcf] 
    transition-colors duration-300 hover:text-[#b93fc6]`}
          onClick={eyeClick}
        ></i>
      )}
    </div>
  );
}
