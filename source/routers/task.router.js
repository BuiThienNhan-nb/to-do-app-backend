import express from "express";
import { taskController } from "../controllers/task.controller.js";
const router = express.Router();

// router.get("/", exampleController.example);

router.post("/create-task", taskController.createTask);

export default router;
