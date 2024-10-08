import mongoose from "mongoose";
import { dbCluster, dbHost, dbName, dbPassword, dbUserName } from "../config/index.js";

const username = encodeURIComponent(dbUserName);
const password = encodeURIComponent(dbPassword);

 export const connectDb = () => {
  try {
    console.log("Database connected successfully")
    return mongoose.connect(`${dbHost}${username}:${password}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
    // return mongoose.connect(`mongodb+srv://Sanjiv:Pass4SanjivSir@shoetype.c6gh8k0.mongodb.net/shoe-store-sanjiv?retryWrites=true&w=majority&appName=shoeType`)
  
  } catch (error) {
    console.log("Error connecting db")
  }
}

