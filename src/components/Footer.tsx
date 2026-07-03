interface FooterProps {
  companyName?: string;
  version?: string;
}
export function Footer({ companyName = 'Siticl', version = 'v1.1' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full bg-white/70 backdrop-blur-md border-t border-gray-500/20 px-6 py-4 mt-auto'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-800 font-medium'>
        <div className='flex items-center space-x-1  bg-gray-100 px-2 py-0.5 rounded-full hover:bg-blue-500/50 transition-colors duration-200 cursor-none'>
          <span>&copy; {currentYear}</span>
          <span className='font-semibold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            {companyName}
          </span>
          <span>Derechos reservados</span>
        </div>
        <div className='flex items-center space-x-6'>
          <span className='text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full hover:bg-blue-500/50 hover:text-gray-900 cursor-pointer transition-colors duration-200'>
            Soporte
          </span>
          <span className='text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full hover:bg-blue-500/50 hover:text-gray-900 cursor-pointer transition-colors duration-200'>
            Privacidad
          </span>
          <span className='text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full'>
            {version}
          </span>
        </div>
      </div>
    </footer>
  );
}
