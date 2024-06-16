import { mongoose } from "mongoose";
const { Schema } = mongoose;
const menuSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: false
  }
);

export default mongoose.model("menu", menuSchema);
