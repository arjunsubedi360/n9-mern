import  mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String
})

export default mongoose.model('users', userSchema)