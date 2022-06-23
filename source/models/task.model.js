import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      default: Date.now(),
    },
    priority: {
      type: String,
      required: true,
      default: "Not necessary",
    },
    hasDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
