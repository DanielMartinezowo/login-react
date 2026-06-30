export const tokenStorage = {
  save: (token: string): void => {
    sessionStorage.setItem('token', token);
  },

  get: (): string | null => {
    return sessionStorage.getItem('token');
  },

  clear: (): void => {
    sessionStorage.removeItem('token');
  },
};
