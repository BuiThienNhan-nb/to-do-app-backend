import express from "express";
import { authController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/auth/sign-up", authController.signUp);

authRouter.post("/auth/sign-in", authController.signIn);

export default authRouter;
