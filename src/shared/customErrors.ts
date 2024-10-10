export class InvalidInputError extends Error {
  statusCode: number;
  payload: any;

  constructor(message: string, payload: any) {
    super(message);
    this.message = message;
    this.payload = payload;
    this.statusCode = 400;
  }
}

export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 404;
  }
}
