import mongoose from "mongoose";

const exampleSchema = mongoose.Schema(
  {
    prop1: {
      type: String,
      required: true,
    },
    prop2: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);

const Example = mongoose.model("Example", exampleSchema);

export default Example;
