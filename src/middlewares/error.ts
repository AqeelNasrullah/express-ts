import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler";
import {
  ERROR,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
} from "../../config/constants";
import { INTERNAL_ERROR } from "../utils/responses";

const error = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  err.message = err.message || "INTERNAL SERVER ERROR";

  /** ------ FOR MONGO DB ------- **/

  /** HANDLING CAST ERROR **/
  if (err.name == "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, ERROR);
  }

  /** HANDLING DUPLICATE KEY ERROR **/
  if (err.code === 11000) {
    const message = `This ${Object.keys(err.keyValue)} already exists`;
    err = new ErrorHandler(message, ERROR);
  }

  /** ---------------------------- **/

  /** ------- FOR JWT TOKEN ------ **/

  /** HANDLING WRONG TOKEN **/
  if (err.name == "JsonWebTokenError") {
    const message = `Json web token is invalid , try again`;
    err = new ErrorHandler(message, UNAUTHORIZED);
  }

  /** HANDLING EXPIRED TOKEN **/
  if (err.name == "TokenExpiredError") {
    const message = `Json web token is expired , try again`;
    err = new ErrorHandler(message, UNAUTHORIZED);
  }

  /** ---------------------------- **/

  return INTERNAL_ERROR(res, err.statusCode, null, err.message);
};

export default error;
