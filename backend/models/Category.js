import mongoose from "mongoose";
const { Schema } = mongoose;
const categorySchema = new Schema(
  {
    slug: {
      type: String,
      required: true, // required
      unique: true, //indexing in database which make this field unique (book page content 1.1 --- page1)
    },
    name: {
      type: String,
      required: true, // required
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

export default mongoose.model("categories", categorySchema);
