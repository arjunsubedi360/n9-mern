import mongoose from "mongoose";
const { Schema } = mongoose;
const tableSchema = new Schema(
  {
    slug: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tables", tableSchema);
