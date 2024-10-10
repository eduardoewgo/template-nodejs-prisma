import winston from 'winston';

export type Logger = winston.Logger;

export const createLogger = (level: string = 'info') =>
  winston.createLogger({
    level,
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });
