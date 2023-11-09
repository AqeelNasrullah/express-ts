"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const uncaughtException_1 = __importDefault(require("./src/utils/uncaughtException"));
const uncaughtRejection_1 = __importDefault(require("./src/utils/uncaughtRejection"));
/** ENV CONFIG **/
dotenv_1.default.config();
/** VARIABLES VALUES FROM ENV FILE **/
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
/** CREATED SERVER **/
const server = http_1.default.createServer(app_1.default);
/** HANDLING UNCAUGHT EXCEPTIONS/REJECTIONS **/
(0, uncaughtException_1.default)();
(0, uncaughtRejection_1.default)(server);
/** SERVER LISTENING TO PORT **/
server.listen(PORT, () => console.log(`\nServer started:\n>> [HOST]: ${BASE_URL}\n>> [MODE]: ${NODE_ENV}\n`));
