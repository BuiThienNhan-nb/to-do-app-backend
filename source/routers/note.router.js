import express from "express";
import { noteController } from "../controllers/note.controller.js";
const router = express.Router();

router.post("/add-note", noteController.addNote);
router.get("/:id/get-note-by-user-id", noteController.getNoteByUserId);
router.patch("/:id/update", noteController.updateNote);
router.delete("/:id/delete", noteController.deleteNote);

export default router;
