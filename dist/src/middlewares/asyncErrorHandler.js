"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler = (asyncFunc) => (req, res, next) => {
    Promise.resolve(asyncFunc(req, res, next)).catch(next);
};
exports.default = asyncErrorHandler;
