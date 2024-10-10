import { PrismaClient } from '@prisma/client';
import { Logger } from '../shared/customLogger';

export const playerDao = (prisma: PrismaClient, logger: Logger) => {
  const getPlayer = async (id: number) => {
    logger.info(`Getting player with id ${id}`);
    return prisma.player.findFirst({ where: { futbinId: id } });
  };

  return { getPlayer };
};
