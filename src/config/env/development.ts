import { Config } from '../config';

export const config: Config = {
  application: {
    port: Number(process.env.PORT) || 3000,
    env: 'development',
  },
};
