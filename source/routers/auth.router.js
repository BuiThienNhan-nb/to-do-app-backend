import express from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/test-create-user", authController.testCreateUser);

authRouter.post("/sign-in", authController.signIn);

authRouter.post("/create-task", authController.createTask);

export default authRouter;
