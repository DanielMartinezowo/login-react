import { toast } from 'sonner';

export const notify = {
  succes: (message: string) => {
    toast.success(message, {
      className: 'flex flex-row items-center justify-center text-center',
      duration: 7500,
      style: { background: '#BEA3E6', color: '#482380', borderColor: '#482380' },
    });
  },

  error: (message: string) => {
    toast.error(message, {
      /* className: 'flex flex-row items-center justify-center text-center',*/
      duration: 3500,
      richColors: true,
    });
  },
};
