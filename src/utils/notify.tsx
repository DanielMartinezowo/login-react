import { toast } from 'sonner';

export const notify = {
  succes: (message: string) => {
    toast.success(message, {
      className:
        '!flex !flex-row !items-center !justify-center !text-center !h-auto !w-auto !bg-success !border-success-dark !text-success-dark',
      duration: 2500,
    });
  },

  error: (message: string) => {
    toast.error(message, {
      className:
        '!flex !flex-row !items-center !justify-center !text-center !h-auto !w-auto !bg-error !border-error-dark !text-error-dark',
      duration: 2500,
    });
  },
};
