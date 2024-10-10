import { PrismaClient } from '@prisma/client';
import express, { RequestHandler } from 'express';

import { loadConfig } from './config/config';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { setContextMiddleware } from './middlewares/setContextMiddleware';
import { createLogger } from './shared/customLogger';
import { createDataAccessObjects } from './daos';
import { v1 } from './controllers/v1';

const config = loadConfig();

export const createApp = async () => {
  const app = express();
  const prisma = new PrismaClient();
  const logger = createLogger();
  const daos = createDataAccessObjects(prisma, logger);

  app.use(express.json());
  app.use(setContextMiddleware(daos, logger) as RequestHandler);

  app.use('/v1', v1({ daos, logger }));

  app.use(errorMiddleware as unknown as RequestHandler);

  return app;
};

createApp()
  .then((app) => {
    app.listen(config.application.port, () => {
      console.log(`Server is running in ${config.application.env} mode on port ${config.application.port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
