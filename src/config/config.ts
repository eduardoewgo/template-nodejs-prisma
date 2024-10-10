export type Config = {
  application: {
    port: number;
    env: string;
  };
};

export const loadConfig = (): Config => {
  const { config } = require(`./env/${process.env.NODE_ENV || 'development'}`);

  return config;
};
