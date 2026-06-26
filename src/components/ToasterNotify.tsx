import { Toaster } from 'sonner';

export function ToasterNotify() {
  return (
    <Toaster
      position='top-right'
      toastOptions={{ style: { width: 'fit-content', margin: 'auto' } }}
    ></Toaster>
  );
}
