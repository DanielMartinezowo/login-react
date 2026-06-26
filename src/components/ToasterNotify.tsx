import { Toaster } from 'sonner';

export function ToasterNotify() {
  return (
    <Toaster
      richColors
      position='top-right'
      toastOptions={{ style: { width: 'fit-content', margin: 'auto' } }}
    ></Toaster>
  );
}
