import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import authRoutes from "./routes/auth.routes";
import guardRoutes from "./routes/guard.routes";

// init
const app = express();

// settings
app.set("port", process.env.PORT || 8080);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get("/", (req, res) => {
  res.send(`LISTENING AT ${app.get("port")}`);
});

app.use(authRoutes);
app.use(guardRoutes);

export default app;
