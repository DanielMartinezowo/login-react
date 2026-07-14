import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    function listener(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    }
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [handler]);
  return ref;
}
