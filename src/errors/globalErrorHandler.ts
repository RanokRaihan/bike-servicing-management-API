import { Prisma } from "@prisma/client";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ApiError from "./ApiError";

export const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // define default values
  let statusCode = 500;
  let message = err.message || "something went wrong!";
  const node_env = process.env.NODE_ENV;
  //apiError handler
  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  if (err instanceof Error) {
    message = err.message;
  }
  if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Validation Error! Please check your input.";
    statusCode = 400;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error! Please check your input.";
      statusCode = 400;
    }
  }
  //   return response
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    stack: node_env === "development" ? err?.stack : null,
  });
};
