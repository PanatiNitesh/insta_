import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString)
  throw new Error("Missing DATABASE_URL environment variable");


const client = postgres(connectionString, { max: 1 });


export const db = drizzle(client);
