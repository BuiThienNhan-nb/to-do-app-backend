import express from "express";
import { taskController } from "../controllers/task.controller.js";
const router = express.Router();

router.get("/task", taskController.testShowTask);

export default router;
