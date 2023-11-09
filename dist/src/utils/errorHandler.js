"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(message, statusCode, code, path, keyValue) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.path = path;
        this.keyValue = keyValue;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ErrorHandler;
