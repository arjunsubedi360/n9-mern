import mongoose from "mongoose";

const username = encodeURIComponent("nabin09");
const password = encodeURIComponent("nabin09");
const dbName = "mero-order";
 export const connectDb = () => {
  try {
    console.log("Connected DB!")
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ts7bsp5.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
  } catch (error) {
    console.log("Error connecting db")
  }
}
