import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, //object mongodbId
      ref: 'users', //collection name /table name _id
    }
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

export default mongoose.model("categories", categorySchema);
