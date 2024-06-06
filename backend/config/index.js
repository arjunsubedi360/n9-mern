import dotenv from 'dotenv';
dotenv.config()

export const dbName  =  process.env.DB_NAME;
export const dbCluster = process.env.DB_CLUSTER;

