import { Request, Response, NextFunction } from 'express';
import { v4 } from 'uuid';

import { DataAccessObjects } from '../daos';
import { Logger } from '../shared/customLogger';

export type EnrichedRequest = Request & {
  context: {
    correlationId: string;
  };
};

export const setContextMiddleware =
  (daos: DataAccessObjects, logger: Logger) => async (req: EnrichedRequest, res: Response, next: NextFunction) => {
    const correlationId = req.header('correlation-id') || v4();

    req.context = {
      correlationId,
    };

    logger.info(`Request received with correlation-id ${correlationId}`);

    next();
  };
