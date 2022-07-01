import Note from "../models/note.model.js";

export const noteController = {
  createNote: async function (req, res) {
    // Create a new note model from the request
    const note = Note({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      priority: req.body.priority,
      hasDone: req.body.hasDone,
    });

    // Save the note model to the database
    try {
      await note.save();
      return res.json(note);
    } catch (err) {
      return res.json({ success: false, error: err.message });
    }
  },
};
