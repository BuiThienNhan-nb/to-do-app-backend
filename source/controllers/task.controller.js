import Task from "../models/task.model.js";

export const taskController = {
  createTask: async function (req, res) {
    // Create a new task model from the request
    const task = Task({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      priority: req.body.priority,
      hasDone: req.body.hasDone,
    });

    // Save the task model to the database
    try {
      await task.save();
      return res.json(task);
    } catch (err) {
      return res.json({ success: false, error: err.message });
    }
  },
};
