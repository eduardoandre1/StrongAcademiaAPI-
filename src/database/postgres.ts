import pg from 'pg';
import { ClientConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config()
const {Pool} = pg
const config: ClientConfig = 
{
	connectionString: process.env.DATABASE_URL,
	ssl:process.env.NODE_ENV === "production"?true: false
}
export const DB = new Pool(config)

console.log('server is running')





