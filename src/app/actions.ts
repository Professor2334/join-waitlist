"use server";

import { neon } from '@neondatabase/serverless';
import { waitlistSchema, WaitlistFormData } from '@/lib/schema';
import nodemailer from 'nodemailer';

export async function submitApplication(data: WaitlistFormData) {
  // 1. Server-side Validation
  const validated = waitlistSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  // 2. Normalize email
  const email = validated.data.email.trim().toLowerCase();

  try {
    // 3. Database Insertion
    if (!process.env.DATABASE_URL) {
       console.warn("DATABASE_URL is not set. Skipping DB insertion for local development.");
    } else {
      const sql = neon(process.env.DATABASE_URL);
      
      try {
        await sql`
          INSERT INTO waitlist_applications (
            full_name, email, phone_number, age_range, gender, current_level,
            learning_goals, interested_areas, previous_project,
            career_vision, program_help, desired_impact
          ) VALUES (
            ${validated.data.fullName}, ${email}, ${validated.data.phoneNumber}, 
            ${validated.data.ageRange}, ${validated.data.gender}, ${validated.data.currentLevel},
            ${validated.data.learningGoals}, ${validated.data.interestedAreas}, ${validated.data.previousProject || null},
            ${validated.data.careerVision}, ${validated.data.programHelp}, ${validated.data.desiredImpact}
          )
        `;
      } catch (dbError: any) {
        // Handle Duplicate Email (Unique Constraint Violation)
        if (dbError.message?.includes('unique constraint') || dbError.code === '23505' || dbError.message?.includes('duplicate key')) {
          return { success: false, error: "You've already submitted an application with this email address." };
        }
        console.error("Database insertion failed:", dbError);
        return { success: false, error: "A database error occurred while saving your application. Please try again." };
      }
    }

    // 4. Email Confirmation
    try {
      if (process.env.SMTP_HOST && process.env.SMTP_USER) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || 'noreply@smart.inc',
          to: email,
          subject: "Application Received — SMART.INC Program",
          text: `Hi ${validated.data.fullName},\n\nYour application has been successfully submitted. We'll be in touch with the next steps.\n\nBest,\nSMART.INC Team`,
          html: `<p>Hi ${validated.data.fullName},</p><p>Your application has been successfully submitted. We'll be in touch with the next steps.</p><br/><p>Best,<br/>SMART.INC Team</p>`,
        });
      } else {
         console.warn("SMTP credentials not set. Skipping confirmation email.");
      }
    } catch (emailError) {
      // Log error but DO NOT fail the submission.
      // The application data must not be accidentally duplicated because an email operation failed.
      console.error("Email sending failed:", emailError);
    }

    // 5. Success
    return { success: true };

  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
