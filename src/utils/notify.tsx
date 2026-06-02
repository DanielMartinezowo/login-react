import { toast } from 'react-hot-toast';

export const notify = {
  succes: (message: string) => {
    toast.success(message, {
      iconTheme: { primary: '#824fcf', secondary: '#fff' },
    });
  },

  error: (message: string) => {
    toast.error(message);
  },
};
