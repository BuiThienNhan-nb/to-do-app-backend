import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/mongoose.js";

import router from "./routers/example.router.js";
import userRouter from "./routers/user.router.js";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

// Setup middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

// Connect to Database
connectDB();

app.use(router);
app.use(userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App API listening at http://localhost:${port}`);
});
