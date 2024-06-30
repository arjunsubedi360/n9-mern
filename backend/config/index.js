import dotenv from 'dotenv';
dotenv.config();

//Databse
export const dbCluster = process.env.DB_CLUSTER;
export const dbHost = process.env.DB_HOST;
export const dbName= process.env.DB_NAME;
export const dbPassword=process.env.DB_PASSWORD ;
export const dbUserName= process.env.DB_USERNAME;

//JWT 
export const jwtSecretKey = process.env.JWT_SECRET;