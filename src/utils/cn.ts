export function cn(...inputs: unknown[]): string {
  return inputs
    .filter((input): input is string => typeof input === 'string')
    .map((str) => str.trim())
    .filter((str) => str.length > 0)
    .join(' ');
}
