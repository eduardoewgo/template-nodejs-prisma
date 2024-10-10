import { NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';

import { validateSchemaMiddleware } from '../validateSchemaMiddleware';
import { InvalidInputError } from '../../shared/customErrors';

const mockedResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

const mockedNext = jest.fn() as unknown as NextFunction;

describe('validateSchema', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should validate one segment and parse the data', () => {
    const schema = z.object({
      name: z.string(),
      balance: z.coerce.number(),
    });

    const mockedRequest = {
      body: {
        name: 'John Doe',
        balance: '123',
      },
    } as unknown as Request;

    validateSchemaMiddleware([{ schema, key: 'body' }])(mockedRequest, mockedResponse, mockedNext);

    expect(mockedNext).toHaveBeenCalled();

    expect(mockedRequest.body).toEqual({
      name: 'John Doe',
      balance: 123,
    });
  });

  it('should validate multiple segments and parse the data', () => {
    const bodySchema = z.object({
      name: z.string(),
      balance: z.coerce.number(),
    });

    const querySchema = z.object({
      limit: z.coerce.number(),
      offset: z.coerce.number(),
    });

    const mockedRequest = {
      body: {
        name: 'John Doe',
        balance: '123',
      },
      query: {
        limit: '10',
        offset: '20',
      },
    } as unknown as Request;

    validateSchemaMiddleware([
      { schema: bodySchema, key: 'body' },
      { schema: querySchema, key: 'query' },
    ])(mockedRequest, mockedResponse, mockedNext);

    expect(mockedNext).toHaveBeenCalled();

    expect(mockedRequest.body).toEqual({
      name: 'John Doe',
      balance: 123,
    });
    expect(mockedRequest.query).toEqual({
      limit: 10,
      offset: 20,
    });
  });

  it('should throw an error if any segment is invalid', () => {
    const bodySchema = z.object({
      name: z.string(),
      balance: z.coerce.number(),
    });

    const querySchema = z.object({
      limit: z.coerce.number(),
      offset: z.coerce.number(),
    });

    const mockedRequest = {
      body: {
        name: 'John Doe',
        balance: 'not a number',
      },
      query: {
        limit: 'not a number',
        offset: 'not a number',
      },
    } as unknown as Request;

    try {
      validateSchemaMiddleware([
        { schema: bodySchema, key: 'body' },
        { schema: querySchema, key: 'query' },
      ])(mockedRequest, mockedResponse, mockedNext);
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidInputError);
      expect((error as InvalidInputError).payload.error).toBeInstanceOf(ZodError);
      expect((error as InvalidInputError).message).toEqual('Invalid input');
      expect(mockedNext).not.toHaveBeenCalled();
    }
  });
});
