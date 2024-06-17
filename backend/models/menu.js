import mongoose from "mongoose";
const {Schema} = mongoose;

const MenuSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);
export default mongoose.model("Menu", MenuSchema);