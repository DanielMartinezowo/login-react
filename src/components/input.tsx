import type { IconProps } from './IconBase';

interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  Icon?: React.ComponentType<IconProps>;
  iconSize?: 'sm' | 'md' | 'lg';
  iconPlacement?: 'label' | 'inside';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  IconEye?: React.ComponentType<IconProps>;
  eyeClick?: () => void;
}
export function Input({
  label,
  type,
  id,
  name,
  placeholder,
  iconSize = 'sm',
  iconPlacement = 'label',
  Icon,
  value,
  onChange,
  IconEye,
  eyeClick,
}: InputProps) {
  const isIconInLabel = Icon && iconPlacement === 'label';
  const isIconInside = Icon && iconPlacement === 'inside';
  return (
    <div className=' w-full h-full mb-5 flex flex-col text left-'>
      <label
        htmlFor={id}
        className='text-[#824fcf] text-sm mb-2 ml-2.5 flex items-center gap-1.5 font-medium'
      >
        {isIconInLabel && <Icon size={iconSize} />}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {isIconInside && (
          <Icon
            size={iconSize}
            className='text-[#824fcf]! absolute left-4 top-1/2 -translate-y-1/2 '
          />
        )}

        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className={`w-full 
      px-5 py-3 
      border border-gray-300 rounded-3xl outline-none 
      transition-all duration-300 
      bg-white text-gray-800 text-[15px] 
      shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] focus:border-[#824fcf]
      ${isIconInside ? 'pl-11' : 'pl-5'}
      ${IconEye ? '' : ''}`}
        />
        {IconEye && (
          <IconEye
            size={iconSize}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-[#824fcf] cursor-pointer hover:text-[#b93fc6] transition-colors duration-300'
            onClick={eyeClick}
          />
        )}
      </div>
    </div>
  );
}
