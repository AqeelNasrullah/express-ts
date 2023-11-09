"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const error_1 = __importDefault(require("./middlewares/error"));
/** VARIABLES **/
const PRE_URL = "/api";
/** INITIALIZED APP **/
const app = (0, express_1.default)();
/** HANDLING CORS **/
app.use((0, cors_1.default)());
/** REQUESTS LOGGER **/
app.use((0, morgan_1.default)("dev"));
/** BODY PARSER **/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/** BASE URL **/
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is up & running!!!" });
});
/** API BASE URL **/
app.get(PRE_URL, (req, res) => {
    res.status(200).json({ message: "Server is up & running!!!" });
});
/** ROUTES **/
/** ERROR MIDDLEWARE **/
app.use(error_1.default);
/** SERVING STATIC CONTENT **/
app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../../public")));
exports.default = app;
