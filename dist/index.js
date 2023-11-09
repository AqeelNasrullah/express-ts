"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is up & running!!!" });
});
app.get("/api", (req, res) => {
    res.status(200).json({ message: "Server is up & running!!!" });
});
app.use("/assets", express_1.default.static(path_1.default.join(__dirname, "../public")));
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const server = http_1.default.createServer(app);
server.listen(PORT, () => console.log(`\nServer started:\n>> [HOST]: ${BASE_URL}\n>> [MODE]: ${NODE_ENV}\n`));
