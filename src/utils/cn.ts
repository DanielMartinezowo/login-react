export function cn(...args: unknown[]): string {
  return args
    .filter((arg): arg is string => typeof arg === 'string')
    .map((str) => str.trim())
    .filter((str) => str.length > 0)
    .join(' ');
}
