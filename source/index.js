import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/mongoose.js";
import router from "./routers/task.router.js";

const app = express();

dotenv.config();

console.log(process.env.CONNECTION_URL);

// Setup middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

// Connect to Database
connectDB();

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Todo App API listening at http://localhost:${port}`);
});
