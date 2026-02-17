import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorMiddleware = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      error: err.error,
      message: err.message,
    });
  }

  console.error(err);

  res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Something went wrong",
  });
};
