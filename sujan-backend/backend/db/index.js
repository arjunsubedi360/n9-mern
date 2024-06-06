import mongoose from "mongoose";

const username = encodeURIComponent("arjunsubedi360");
const password = encodeURIComponent("wJMciPh2X7SOZYW4");
const dbName = "mero-order";

 export const connectDb = () => {
  try {
    console.log("Connected DB!")
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xnkcnwi.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
  } catch (error) {
    console.log("Error connecting db")
  }
}
