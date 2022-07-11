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
      return res.json({ success: false, message: err.message });
    }
  },

  getNoteByUserId: async function (req, res) {
    const userId = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.json({
        success: false,
        message: `No note with id: ${userId}`,
      });
    try {
      const notes = await Note.find({ userId: req.params }).exec();
      res.json(notes);
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  },

  updateNote: async function (req, res) {
    const noteId = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId))
      return res.json({
        success: false,
        message: `No note with id: ${noteId}`,
      });

    const { title, description, deadline, priority, hasDone } = req.body;
    try {
      await Note.findByIdAndUpdate(
        noteId,
        {
          $set: {
            title: title,
            description: description,
            deadline: deadline,
            priority: priority,
            hasDone: hasDone,
          },
        },
        { new: true }
      );
      return res.json({ success: true, message: `Update note successfully` });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  },

  deleteNote: async function (req, res) {
    const noteId = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId))
      return res.json({ success: false, message: `No note with id: ${id}` });

    try {
      await Note.findByIdAndRemove(noteId);
      return res.json({ success: true, message: `Delete note successfully` });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  },
};
