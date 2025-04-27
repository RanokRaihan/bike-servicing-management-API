import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import asyncHandler from "../utils/asyncHandler";

// not used: will be used in the future
const validateRequest = (schema: AnyZodObject) => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    }
  );
};

export default validateRequest;
