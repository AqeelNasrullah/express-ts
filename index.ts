import dotenv from "dotenv";
import http from "http";
import app from "./src/app";
import uncaughtException from "./src/utils/uncaughtException";
import uncaughtRejection from "./src/utils/uncaughtRejection";

/** ENV CONFIG **/
dotenv.config();

/** VARIABLES VALUES FROM ENV FILE **/
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV || "Development";

/** CREATED SERVER **/
const server = http.createServer(app);

/** HANDLING UNCAUGHT EXCEPTIONS/REJECTIONS **/
uncaughtException();
uncaughtRejection(server);

/** SERVER LISTENING TO PORT **/
server.listen(PORT, () =>
  console.log(
    `\nServer started:\n>> [HOST]: ${BASE_URL}\n>> [MODE]: ${NODE_ENV}\n`
  )
);
