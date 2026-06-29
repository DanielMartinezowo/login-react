import type { IAuthDataSource } from './authDatasource';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const randomDelay = (min: number, max: number) => {
  const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
  return delay(randomTime);
};
export class DelayedAuthDataSource implements IAuthDataSource {
  originalDataSource: IAuthDataSource;
  isRandom: boolean;

  constructor(originalDataSource: IAuthDataSource, isRandom = false) {
    this.originalDataSource = originalDataSource;
    this.isRandom = isRandom;
  }
  async login(email: string, password: string): Promise<string> {
    if (this.isRandom) {
      await randomDelay(500, 5000);
    } else {
      await delay(1500);
    }
    return this.originalDataSource.login(email, password);
  }
}
