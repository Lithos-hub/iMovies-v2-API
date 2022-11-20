import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/mongo";
import router from "./routes";

// init
const app = express();

db().then(() => "Conexion ready");
// settings
const PORT = process.env.PORT || 8080;
app.set("port", PORT);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PATH_STORAGE = `${process.cwd()}/src/public`;
app.use(express.static(PATH_STORAGE));

// routes
app.use(router);

export default app;
