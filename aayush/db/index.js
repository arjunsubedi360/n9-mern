import  mongoose from "mongoose";
const username = encodeURIComponent("Aayush")
const password = encodeURIComponent("H6UGBb35NzBKmCd3");
const dbName = "mero-order";
mongoose.connect(`mongodb+srv://${username}:${password}@rajendrakarki.8qtyuyy.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=RajendraKarki`)