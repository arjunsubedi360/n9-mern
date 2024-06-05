import  mongoose from "mongoose";
const username = encodeURIComponent("rajendrakarki0614")
const password = encodeURIComponent("2005Rajendrakarki0614@");
const dbName = "mero-order";
mongoose.connect(`mongodb+srv://${username}:${password}@rajendrakarki.8qtyuyy.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=RajendraKarki`)