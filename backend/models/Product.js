import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
  
    title: {
      type: String,
      required: true, // required
    },
    price: {
      type: Number,
      required: true
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
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

export default mongoose.model("products", productSchema);
