import mongoose from "mongoose";
const { Schema } = mongoose;
const tableSchema = new Schema(
  {
    slug: {
      type: String,
      default: "slug",
      unique: true,
      required: true,
      minLength: [2, "Cannot be less than 2 character"],
      maxLength: [20, "Cannot tbe more than 50 character"]
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tables", tableSchema);
