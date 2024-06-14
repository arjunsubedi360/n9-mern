import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderItem: {
    type: String,
    required: true,
  },
  orderQuantity: {
    type: Number,
    required: true,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("orders", orderSchema);