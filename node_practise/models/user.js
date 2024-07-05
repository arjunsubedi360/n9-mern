import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // required
    },
    email: {
      type: String,
      required: true,
      unique: true, //unique
      minLength: [2, "Email should have minimum 2 character"], //character wise
      maxLength: [30, "Email should have maximum 30 character"],
    },
    age: {
      type: Number,
      min: [18, "Age should be more than 18"], //number wise
      max: [60, "You are very old man. Sorry"],
    },
    isMarried: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    password: {
      type: String,
      required: true, // required
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
