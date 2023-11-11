"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const constants_1 = require("../../config/constants");
const responses_1 = require("../utils/responses");
const error = (err, req, res, next) => {
    err.statusCode = err.statusCode || constants_1.INTERNAL_SERVER_ERROR;
    err.message = err.message || "INTERNAL SERVER ERROR";
    /** ------ FOR MONGO DB ------- **/
    /** HANDLING CAST ERROR **/
    if (err.name == "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new errorHandler_1.default(message, constants_1.ERROR);
    }
    /** HANDLING DUPLICATE KEY ERROR **/
    if (err.code === 11000) {
        const message = `This ${Object.keys(err.keyValue)} already exists`;
        err = new errorHandler_1.default(message, constants_1.ERROR);
    }
    /** ---------------------------- **/
    /** ------- FOR JWT TOKEN ------ **/
    /** HANDLING WRONG TOKEN **/
    if (err.name == "JsonWebTokenError") {
        const message = `Json web token is invalid , try again`;
        err = new errorHandler_1.default(message, constants_1.UNAUTHORIZED);
    }
    /** HANDLING EXPIRED TOKEN **/
    if (err.name == "TokenExpiredError") {
        const message = `Json web token is expired , try again`;
        err = new errorHandler_1.default(message, constants_1.UNAUTHORIZED);
    }
    /** ---------------------------- **/
    return (0, responses_1.INTERNAL_ERROR)(res, err.statusCode, null, err.message);
};
exports.default = error;
