import dotenv from "dotenv";
dotenv.config();

// required
const validateEnv = (envVar) => {
  if (!process.env[envVar]) {
    console.error(`Error: Missing required environment variable: ${envVar}`);
    throw new Error(`Error: Missing required environment variable: ${envVar}`)
  }
  return process.env[envVar];
};

//Databse
export const dbCluster = validateEnv("DB_CLUSTER");
export const dbHost = validateEnv('DB_HOST');
export const dbName = validateEnv("DB_NAME");
export const dbPassword = validateEnv('DB_PASSWORD');
export const dbUserName = validateEnv('DB_USERNAME');


// //JWT
export const jwtSecretKey = validateEnv("JWT_SECRET");

//SMPT
export const smptPassword = validateEnv('SMPT_PASSWORD');