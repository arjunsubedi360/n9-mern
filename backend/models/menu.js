import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
        
        slug: {
            type: String,
            unique: true,
            required: true,
        },

    },
    {
        timestamps: true,
    });

export default mongoose.model("menu", menuSchema);