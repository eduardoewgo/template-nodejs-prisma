import zod from 'zod';
import { NextFunction, Response, Request } from 'express';

import { InvalidInputError } from '../shared/customErrors';

type Segment = {
  schema: zod.ZodSchema;
  key: 'body' | 'query' | 'params';
};

export const validateSchemaMiddleware = (segments: Segment[]) => (req: Request, res: Response, next: NextFunction) => {
  for (const segment of segments) {
    const result = segment.schema.safeParse(req[segment.key]);

    if (!result.success) {
      throw new InvalidInputError('Invalid input', { error: result.error });
    }

    req[segment.key] = result.data;
  }

  next();
};
