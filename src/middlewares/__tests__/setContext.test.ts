import { NextFunction, Response } from 'express';

import { EnrichedRequest, setContextMiddleware } from '../setContextMiddleware';
import { DataAccessObjects } from '../../daos';
import { Logger } from '../../shared/customLogger';

jest.mock('uuid', () => ({
  v4: () => 'random-uuid',
}));

const mockedResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

const mockedRequest = {
  header: jest.fn().mockReturnValue('correlation-id'),
} as unknown as EnrichedRequest;

const mockedNext = jest.fn() as unknown as NextFunction;

const mockedLogger = {
  info: jest.fn(),
} as unknown as Logger;

describe('setContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set the correlationId given in the header', () => {
    setContextMiddleware({} as DataAccessObjects, mockedLogger)(mockedRequest, mockedResponse, mockedNext);

    expect(mockedRequest.context).toEqual({
      correlationId: 'correlation-id',
    });

    expect(mockedResponse.status).not.toHaveBeenCalled();
    expect(mockedResponse.json).not.toHaveBeenCalled();
    expect(mockedNext).toHaveBeenCalled();
  });

  it('should set the correlationId to a random uuid if not given', () => {
    mockedRequest.header = jest.fn().mockReturnValue(undefined);

    setContextMiddleware({} as DataAccessObjects, mockedLogger)(mockedRequest, mockedResponse, mockedNext);

    expect(mockedRequest.context).toEqual({
      correlationId: 'random-uuid',
    });

    expect(mockedResponse.status).not.toHaveBeenCalled();
    expect(mockedResponse.json).not.toHaveBeenCalled();
    expect(mockedNext).toHaveBeenCalled();
  });
});
