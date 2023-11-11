import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "./asyncErrorHandler";
import ErrorHandler from "../utils/errorHandler";
import { UNAUTHORIZED } from "../../config/constants";

// jwt verification and authorization logic goes here
const authentication = () =>
  asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    if (!token) {
      return next(
        new ErrorHandler("Authentication token is missing.", UNAUTHORIZED)
      );
    }
    next();
  });

export default authentication;
