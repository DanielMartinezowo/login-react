import { Icon, type IconName } from './icon';

interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  IconName?: IconName;
  iconPlacement?: 'label' | 'inside';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasIconEye?: boolean;
  typeOfEyeIcon?: IconName;
  eyeClick?: () => void;
}
export function Input({
  label,
  type,
  id,
  name,
  placeholder,
  iconPlacement = 'label',
  IconName,
  value,
  onChange,
  hasIconEye = false,
  typeOfEyeIcon = 'eye-show',
  eyeClick,
}: InputProps) {
  const isIconInLabel = IconName && iconPlacement === 'label';
  const isIconInside = IconName && iconPlacement === 'inside';
  return (
    <div className='relative w-full h-full mb-5 flex flex-col text left-'>
      <label
        htmlFor={id}
        className='text-[#824fcf] text-sm mb-2 ml-2.5 flex items-center gap-1.5 font-medium'
      >
        {isIconInLabel && <Icon name={IconName} className='text-[18px]' />}
        {label}
      </label>
      <div className='relative w-full flex items-center'>
        {isIconInside && <Icon name={IconName} position='left' className='text-[#824fcf]!' />}

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
      ${hasIconEye ? '' : ''}`}
        />
        {hasIconEye && (
          <Icon
            name={typeOfEyeIcon}
            position='right'
            className='text-[#824fcf] cursor-pointer hover:text-[#b93fc6] transition-colors duration-300'
            onClick={eyeClick}
          />
        )}
      </div>
    </div>
  );
}
