import { NextFunction, Request, Response } from 'express';

import { InvalidInputError, NotFoundError } from '../shared/customErrors';

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof InvalidInputError) {
    console.log(err);
    return res.status(400).json({ message: err.message, error: err.payload });
  }

  if (err instanceof NotFoundError) {
    console.log(err);
    return res.status(404).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
};
