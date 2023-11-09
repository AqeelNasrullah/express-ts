"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERNAL_ERROR = exports.ERROR = exports.OK = void 0;
const constants_1 = require("../../config/constants");
const OK = (res, result, message) => {
    return res.status(constants_1.OK).json({ success: true, result, message });
};
exports.OK = OK;
const ERROR = (res, result, message) => {
    return res.status(constants_1.OK).json({ success: false, result, message });
};
exports.ERROR = ERROR;
const INTERNAL_ERROR = (res, responseCode, result, message, error) => {
    return res
        .status(responseCode)
        .json({ success: false, result, message, error: error || null });
};
exports.INTERNAL_ERROR = INTERNAL_ERROR;
