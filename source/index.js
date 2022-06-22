import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/mongoose.js";
import http from "http";

import router from "./routers/example.router.js";
import authRouter from "./routers/auth.router.js";
import auth from "./middlewares/auth.middleware.js";

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

// Setup middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

// Connect to Database
connectDB();

app.use(router);
app.use(authRouter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App API listening at http://localhost:${port}`);
});
