import { PrismaClient } from '@prisma/client';

import { Logger } from '../shared/customLogger';
import { playerDao } from './player';

export type DataAccessObjects = ReturnType<typeof createDataAccessObjects>;

export const createDataAccessObjects = (prisma: PrismaClient, logger: Logger) => {
  return {
    player: playerDao(prisma, logger),
  };
};
