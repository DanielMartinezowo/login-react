export function cn(...args: unknown[]): string {
  return args
    .filter((arg): arg is string => typeof arg === 'string' && arg.trim().length > 0)
    .map((str) => str.trim())
    .join(' ');
}
