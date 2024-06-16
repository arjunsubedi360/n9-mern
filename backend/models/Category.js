import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

export default mongoose.model("categories", categorySchema);
