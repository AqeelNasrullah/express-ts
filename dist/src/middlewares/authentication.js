"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncErrorHandler_1 = __importDefault(require("./asyncErrorHandler"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const constants_1 = require("../../config/constants");
// jwt verification and authorization logic goes here
const authentication = () => (0, asyncErrorHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    if (!token) {
        return next(new errorHandler_1.default("Authentication token is missing.", constants_1.UNAUTHORIZED));
    }
    next();
}));
exports.default = authentication;
