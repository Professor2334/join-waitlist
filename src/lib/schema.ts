import { z } from "zod";

export const waitlistSchema = z.object({
  // Step 1: Personal Info
  fullName: z.string().min(2, "Name must be at least 2 characters").max(150, "Name must be less than 150 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
  phoneNumber: z.string().min(6, "Phone number is too short").max(30, "Phone number is too long"),
  ageRange: z.enum(["Under 18", "18-24", "25-34", "35-44", "45+"], {
    message: "Please select your age range",
  }),
  gender: z.enum(["Male", "Female", "Non-binary", "Prefer not to say"], {
    message: "Please select your gender",
  }),
  currentLevel: z.enum(["High School", "Undergraduate", "Graduate", "Professional", "Other"], {
    message: "Please select your current level",
  }),

  // Step 2: Learning Goals
  learningGoals: z.string().min(10, "Please provide a bit more detail").max(2000, "Maximum 2000 characters allowed"),
  interestedAreas: z.array(z.string()).min(1, "Please select at least one area of interest"),
  previousProject: z.string().max(2000, "Maximum 2000 characters allowed").optional().or(z.literal("")),

  // Step 3: Career Vision
  careerVision: z.string().min(10, "Please provide a bit more detail").max(2000, "Maximum 2000 characters allowed"),
  programHelp: z.string().min(10, "Please provide a bit more detail").max(2000, "Maximum 2000 characters allowed"),
  desiredImpact: z.string().min(10, "Please provide a bit more detail").max(2000, "Maximum 2000 characters allowed"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
