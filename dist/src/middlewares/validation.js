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
const validation = (schema, object = "body") => {
    return (0, asyncErrorHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const value = yield schema.validateAsync(req[object]);
        if (value.error) {
            return next(new errorHandler_1.default(value.error.details[0].message, constants_1.ERROR));
        }
        next();
    }));
};
exports.default = validation;
