import { toast } from 'sonner';

export const notify = {
  succes: (message: string) => {
    toast.success(message, {
      className: '!flex !flex-row !items-center !justify-center !text-center !h-auto !w-auto',
      duration: 1500,
      style: {
        color: '#824fcf',
      },
    });
  },

  error: (message: string) => {
    toast.error(message, {
      className: '!flex !flex-row !items-center !justify-center !text-center !h-auto !w-auto',
      duration: 1500,
      style: {
        color: '#95060',
      },
    });
  },
};
