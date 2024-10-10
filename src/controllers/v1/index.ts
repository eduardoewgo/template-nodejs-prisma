import { AsyncRouter } from 'express-async-router';

import { Logger } from '../../shared/customLogger';
import { DataAccessObjects } from '../../daos';
import { validateSchemaMiddleware } from '../../middlewares/validateSchemaMiddleware';

import { getPlayerByFutbinId, playerSchemas } from './players';

export const v1 = ({ daos, logger }: { daos: DataAccessObjects; logger: Logger }) => {
  const router = AsyncRouter();

  router.get(
    '/player/:futbinId',
    validateSchemaMiddleware([{ schema: playerSchemas.getPlayer.params, key: 'params' }]),
    getPlayerByFutbinId({ daos }),
  );

  return router;
};
