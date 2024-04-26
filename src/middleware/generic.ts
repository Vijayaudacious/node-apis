import { NextFunction, Request, Response } from "express";

export const generic = (req: Request, res: Response, next: NextFunction) => {
  const condition = false;
  if (condition) {
    //throw error
    res.status(400).json({ Message: "bad request" });
  }
  next();
};
