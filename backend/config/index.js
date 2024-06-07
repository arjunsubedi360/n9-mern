import dotenv from 'dotenv';
dotenv.config()

export const dbName  =  process.env.DB_NAME;
export const password = process.env.DB_PASSWORD;
