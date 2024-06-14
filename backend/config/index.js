import dotenv from 'dotenv';
dotenv.config();

export const dbName  =  process.env.DB_NAME;
export const dbPassword = process.env.DB_PASSWORD;
export const dbUserName = process.env.DB_USERNAME;



// DB_USERNAME="arjunsubedi360"
// DB_PASSWORD="JMciPh2X7SOZYW4"
// DB_NAME="mero-order"
// DB_BASE="mongodb+srv://"
// DB_CLUSTER="@cluster0.xnkcnwi.mongodb.net"

