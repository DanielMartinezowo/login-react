import { toast } from 'sonner';

export const notify = {
  succes: (message: string) => {
    toast.success(message, {
      className:
        '!flex !flex-row !items-center !justify-center !text-center !bg-success !border-success-dark !text-success-dark',
      duration: 5500,
    });
  },

  error: (message: string) => {
    toast.error(message, {
      className:
        '!flex !flex-row !items-center !justify-center !text-center !bg-error !border-error-dark !text-error-dark',
      duration: 5500,
    });
  },
};
