import mongoose from "mongoose";
const { Schema } = mongoose;
const tableSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tables", tableSchema);
