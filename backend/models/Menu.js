import mongoose from "mongoose";
const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Menus", menuSchema);
