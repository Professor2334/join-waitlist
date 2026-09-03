# AGENTS.md

# SMART.INC Join Waitlist — Agent Instructions

## 1. Project Context

You are working on the SMART.INC Design Thinking Program Join Waitlist website.

This is a small, production-ready waitlist/application website.

The primary purpose is:

**Present the program → communicate its value → collect applicant information → save the application → send confirmation → confirm successful submission.**

Do not expand this project beyond that purpose.

---

# 2. Source of Truth Hierarchy

The project has multiple sources of truth, each with a specific responsibility.

### 1. Reference Image — Primary Visual Source of Truth

The supplied Join Waitlist reference image is the **primary source of truth for the UI and visual implementation**.

Use it to determine:

- Layout
- Section order
- Dimensions
- Spacing
- Alignment
- Typography hierarchy
- Component appearance
- Colors
- Borders
- Border radius
- Buttons
- Form appearance
- Cards
- Icons
- Visual hierarchy
- Overall aesthetic

Treat the reference image as a **design specification**, not inspiration.

### 2. PRD.md — Product Requirements Source of Truth

`PRD.md` defines:

- Product purpose
- User journey
- Required functionality
- Form flow
- Required fields
- Database requirements
- Email requirements
- Scope
- Out-of-scope functionality

Do not implement functionality that contradicts the PRD.

### 3. database-schema.md — Database Source of Truth

`database-schema.md` defines the structure and persistence requirements for application data stored in Neon PostgreSQL.

### 4. design-tokens.css — Visual Token Source of Truth

A formal design system does not currently exist.

During implementation, create a lightweight `design-tokens.css` by deriving the required visual tokens from the reference image.

Once created, use those tokens consistently throughout the application.

---

# 3. Critical Rule: Do Not Redesign

The most important instruction in this project:

**Do not redesign the reference.**

Do not:

- Add sections
- Remove sections
- Rearrange sections
- Add features
- Add navigation
- Add testimonials
- Add FAQs
- Add pricing
- Add dashboards
- Add animations that aren't necessary
- Add decorative elements that aren't in the reference
- Add extra buttons
- Add extra form fields
- Add unnecessary interactions
- Change the visual hierarchy
- Change the layout because you personally prefer another layout
- "Modernize" the design
- "Improve" the design based on personal preference
- Replace the design with a generic SaaS template

The goal is **faithful implementation**, not creative interpretation.

---

# 4. Reference Image Interpretation

When implementing the interface, think:

> "How do I reproduce what is shown?"

Do not think:

> "How would I design a website like this?"

The reference image should be treated similarly to a Figma design file.

If a visual detail is clearly visible in the reference, reproduce it.

If a detail is not visible and is not required by the PRD, do not invent it.

When something cannot be reproduced exactly because the original asset is unavailable, use the closest implementation possible while preserving the original visual hierarchy.

---

# 5. Before Writing Code

Before making changes:

1. Inspect the existing repository.
2. Identify the current framework and project structure.
3. Identify existing components.
4. Identify existing styles.
5. Identify existing assets.
6. Identify existing fonts.
7. Identify existing environment configuration.
8. Identify whether a database connection already exists.
9. Identify whether an email system already exists.
10. Avoid replacing existing infrastructure unnecessarily.

Do not immediately create a new architecture before understanding the existing project.

Reuse existing infrastructure where it is appropriate.

---

# 6. Technology Stack

The required stack is:

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Typography

- Poppins

### Forms

- React Hook Form
- Zod

### Database

- Neon PostgreSQL

### Email

- Nodemailer
- SMTP provider

### Deployment

- Vercel

Do not introduce alternative technologies such as:

- Firebase
- MongoDB
- Supabase
- Prisma unless explicitly required by the existing project
- Express
- Redis
- GraphQL
- Redux
- Kubernetes
- Microservices

unless explicitly instructed later.

Keep the implementation simple.

---

# 7. Architecture Principle

Use a simple Next.js full-stack architecture.

Preferred flow:

```text
Browser
   ↓
Next.js UI
   ↓
React Hook Form
   ↓
Zod Client Validation
   ↓
Next.js Server Action / Route Handler
   ↓
Zod Server Validation
   ↓
Neon PostgreSQL
   ↓
Nodemailer
   ↓
SMTP Provider