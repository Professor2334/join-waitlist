import { neon } from '@neondatabase/serverless';

let dbUrl = process.env.DATABASE_URL;
if (dbUrl.startsWith('"') && dbUrl.endsWith('"')) {
  dbUrl = dbUrl.slice(1, -1);
}
const sql = neon(dbUrl);

async function init() {
  console.log('Initializing database schema...');
  
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist_applications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(30) NOT NULL,
        age_range VARCHAR(50) NOT NULL,
        gender VARCHAR(50) NOT NULL,
        current_level VARCHAR(100) NOT NULL,
        learning_goals TEXT NOT NULL,
        interested_areas TEXT[] NOT NULL,
        previous_project TEXT,
        career_vision TEXT NOT NULL,
        program_help TEXT NOT NULL,
        desired_impact TEXT NOT NULL,
        status VARCHAR(30) NOT NULL DEFAULT 'PENDING',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;
    console.log('✅ Created waitlist_applications table.');

    await sql`
      CREATE INDEX IF NOT EXISTS idx_applications_status ON waitlist_applications(status);
    `;
    console.log('✅ Created index idx_applications_status.');

    await sql`
      CREATE INDEX IF NOT EXISTS idx_applications_created_at ON waitlist_applications(created_at);
    `;
    console.log('✅ Created index idx_applications_created_at.');

    await sql`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
      END;
      $$ language 'plpgsql';
    `;
    console.log('✅ Created or replaced trigger function.');

    await sql`
      DROP TRIGGER IF EXISTS update_waitlist_applications_modtime ON waitlist_applications;
    `;
    await sql`
      CREATE TRIGGER update_waitlist_applications_modtime
      BEFORE UPDATE ON waitlist_applications
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
    `;
    console.log('✅ Created trigger update_waitlist_applications_modtime.');

    console.log('\n🎉 Database initialized successfully!');
  } catch (err) {
    console.error('❌ Failed to initialize database:', err);
    process.exit(1);
  }
}

init();
