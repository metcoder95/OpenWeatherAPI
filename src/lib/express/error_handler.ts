import { Errback, Request, Response, NextFunction } from 'express';

export default (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json(err);
};
