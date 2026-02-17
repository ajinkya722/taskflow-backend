export class AppError extends Error {
  public statusCode: number;
  public error: string;

  constructor(statusCode: number, message: string, error: string) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;

    Error.captureStackTrace(this, this.constructor);
  }
}
