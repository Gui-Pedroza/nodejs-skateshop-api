import dotenv from 'dotenv'
import postgres from 'postgres' 
dotenv.config()

export const sql = postgres(process.env.DB_URL)

