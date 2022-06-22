import express from "express";
import { userController } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/test-create-user", userController.testCreateUser);

userRouter.post("/sign-in", userController.signIn);

userRouter.post("/create-task", userController.createTask);

export default userRouter;
