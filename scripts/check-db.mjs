import { neon } from '@neondatabase/serverless';

let dbUrl = process.env.DATABASE_URL;
if (dbUrl.startsWith('"') && dbUrl.endsWith('"')) {
  dbUrl = dbUrl.slice(1, -1);
}
const sql = neon(dbUrl);

sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`.then(res => {
  console.log("Tables:", res);
}).catch(console.error);
