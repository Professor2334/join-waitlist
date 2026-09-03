# SMART.INC Join Waitlist — Database Schema

**Version:** 1.1  
**Database:** Neon PostgreSQL  
**Scope:** Join Waitlist / Program Application

---

# 1. Database Purpose

The database stores applications submitted through the SMART.INC Design Thinking Program Join Waitlist website.

The database is responsible for:

- Persisting applicant information
- Persisting learning goals
- Persisting career vision
- Tracking application status
- Recording application creation and update timestamps
- Preventing unintended duplicate applications

The database should remain intentionally small because this is a waitlist/application MVP.

---

# 2. Database

Use:

**Neon PostgreSQL**

The application connects to Neon through the server-side Next.js application.

Database credentials must never be exposed to client-side code.

Use the `DATABASE_URL` environment variable for the database connection.

---

# 3. Primary Table

## `waitlist_applications`

This is the primary and only required application table for the MVP.

Each row represents one submitted waitlist application.

---

## 3.1 Schema

| Column | Type | Required | Default | Constraints | Description |
|---|---|---|---|---|---|
| `id` | `UUID` | Yes | `gen_random_uuid()` | Primary Key | Unique application identifier |
| `full_name` | `VARCHAR(150)` | Yes | — | Not Null | Applicant's full name |
| `email` | `VARCHAR(255)` | Yes | — | Not Null, Unique | Applicant's email address |
| `phone_number` | `VARCHAR(30)` | Yes | — | Not Null | Applicant's phone number |
| `age_range` | `VARCHAR(50)` | Yes | — | Not Null | Applicant's selected age range |
| `gender` | `VARCHAR(50)` | Yes | — | Not Null | Applicant's selected gender |
| `current_level` | `VARCHAR(100)` | Yes | — | Not Null | Applicant's current level/class |
| `learning_goals` | `TEXT` | Yes | — | Not Null | What they hope to learn |
| `interested_areas` | `TEXT[]` | Yes | — | Not Null | Array of selected areas of interest |
| `previous_project` | `TEXT` | No | — | — | Project they are proud of |
| `career_vision` | `TEXT` | Yes | — | Not Null | Goals for the next 3-5 years |
| `program_help` | `TEXT` | Yes | — | Not Null | How the program helps them |
| `desired_impact` | `TEXT` | Yes | — | Not Null | Impact they want to create |
| `status` | `VARCHAR(30)` | Yes | `PENDING` | Valid status | Current application status |
| `created_at` | `TIMESTAMPTZ` | Yes | `NOW()` | Not Null | Time application was submitted |
| `updated_at` | `TIMESTAMPTZ` | Yes | `NOW()` | Not Null | Time application was last updated |

---

# 4. Application Status

The MVP uses a simple application status.

Supported values:

- `PENDING`
- `REVIEWED`
- `SHORTLISTED`
- `ACCEPTED`
- `REJECTED`

---

# 5. Indexes and Triggers

To ensure performance and data integrity, the following should be implemented:

- **Implicit Index:** A unique index on `email` is created automatically by the UNIQUE constraint.
- **Status Index:** `CREATE INDEX idx_applications_status ON waitlist_applications(status);`
- **Created At Index:** `CREATE INDEX idx_applications_created_at ON waitlist_applications(created_at);`

To automatically handle the `updated_at` column, implement the following trigger:

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_waitlist_applications_modtime
BEFORE UPDATE ON waitlist_applications
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```