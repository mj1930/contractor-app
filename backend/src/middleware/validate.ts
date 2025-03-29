import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.parse(req.body);
      console.log(result);
      next();
    } catch (error: any) {
      return res.status(400).json({ error: error.errors });
    }
  };
