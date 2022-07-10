import express from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/sign-up", authController.signUp);

authRouter.post("/sign-in", authController.signIn);

export default authRouter;
