import { Request, Response, NextFunction } from "express";
type AppError = {
  status: number;
  message: string;
};

export function appErrors(req: Request, res: Response, next: NextFunction) {
  console.error("Middleware Errors:");
}
