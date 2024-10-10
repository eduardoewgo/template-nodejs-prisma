import { RequestHandler } from 'express';
import { z } from 'zod';

import { DataAccessObjects } from '../../daos';
import { NotFoundError } from '../../shared/customErrors';

export const playerSchemas = {
  getPlayer: {
    params: z.object({
      futbinId: z.coerce.number(),
    }),
  },
};

export const getPlayerByFutbinId =
  ({ daos }: { daos: DataAccessObjects }): RequestHandler =>
  async (req, res) => {
    const { futbinId } = req.params;
    const player = await daos.player.getPlayer(Number(futbinId));

    if (!player) {
      throw new NotFoundError(`Player with futbinId ${futbinId} not found`);
    }

    res.send({ player });
  };
