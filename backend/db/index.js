import mongoose from "mongoose";
import { dbCluster, dbHost, dbName, dbPassword, dbUserName } from "../config/index.js";

const username = encodeURIComponent(dbUserName);
const password = encodeURIComponent(dbPassword);

 export const connectDb = () => {
  try {
    console.log("Connected to db")
    return mongoose.connect(`${dbHost}${username}:${password}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
  } catch (error) {
    console.log("Error connecting db")
  }
}

