import express from "express";
import http from "http";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up & running!!!" });
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Server is up & running!!!" });
});

app.use("/assets", express.static(path.join(__dirname, "../public")));

const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(
    `\nServer started:\n>> [HOST]: ${BASE_URL}\n>> [MODE]: ${NODE_ENV}\n`
  )
);
