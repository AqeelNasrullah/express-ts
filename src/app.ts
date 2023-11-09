import express from "express";
import path from "path";
import cors from "cors";
import logger from "morgan";
import error from "./middlewares/error";

/** VARIABLES **/
const PRE_URL = "/api";

/** INITIALIZED APP **/
const app = express();

/** HANDLING CORS **/
app.use(cors());

/** REQUESTS LOGGER **/
app.use(logger("dev"));

/** BODY PARSER **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use(error);

/** SERVING STATIC CONTENT **/
app.use("/assets", express.static(path.join(__dirname, "../../public")));

export default app;
