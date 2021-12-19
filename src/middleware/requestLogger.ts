import { RequestHandler as Middleware } from "express";

export const requestLogger: Middleware = (req, res, next) => {
  console.log("输出日志:", req.path);
  next();
};
