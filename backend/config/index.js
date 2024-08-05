import dotenv from 'dotenv';
dotenv.config()

export const dbName  =  process.env.DB_NAME;
export const dbUserName = process.env.DB_USERNAME;
export const dbPassword   = process.env.DB_PASSWORD;
export const dbHost = process.env.DB_BASE;
export const dbCluster = process.env.DB_CLUSTER;

export const jwtSecretKey = process.env.JWT_SECRET;

export const port = process.env.PORT;


