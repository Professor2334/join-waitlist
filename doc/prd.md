# SMART.INC Join Waitlist — Product Requirements Document

**Version:** 1.1  
**Product:** SMART.INC Design Thinking Program  
**Document Type:** MVP Product Requirements Document  
**Scope:** Join Waitlist / Program Application Page

---

## 1. Product Overview

The SMART.INC Join Waitlist page is a single-page web experience that allows prospective participants to learn about the Design Thinking program and submit an application to join the next cohort.

The experience consists of:

1. Header
2. Hero / Program Introduction
3. Three-Step Waitlist Application Form
4. Program Benefits
5. Footer

This is a lightweight waitlist/application experience.

It is **not** a full learning platform, applicant management system, dashboard, or program portal.

---

## 2. Primary Objective

Enable an interested person to:

**Understand the program → decide to apply → complete the application → submit their information successfully.**

The primary conversion is a completed waitlist/application submission.

---

## 3. Source of Truth

The **attached reference image is the primary source of truth for the visual design and layout.**

The implementation must reproduce the reference image as closely as possible.

The reference image determines:

- Page structure
- Section order
- Layout
- Visual hierarchy
- Typography hierarchy
- Spacing
- Card treatment
- Buttons
- Form appearance
- Colors
- Borders
- Border radius
- Icons
- Footer structure
- Overall visual aesthetic

The reference image must be treated as a **design specification, not design inspiration**.

### Critical Rule

Do not add UI that does not exist in the reference.

Do not remove UI that exists in the reference.

Do not redesign sections.

Do not introduce additional features unless explicitly required by this PRD.

Do not "improve" or modernize the design based on personal interpretation.

---

# 4. Target User

The page is intended for prospective participants interested in the SMART.INC Design Thinking program, particularly people interested in:

- Robotics
- Artificial Intelligence
- Design Thinking
- Building real-world solutions
- Industry mentorship
- Career development

---

# 5. User Journey

```text
Landing Page
      ↓
Understand Program
      ↓
Join the Waitlist
      ↓
Personal Information
      ↓
Learning Goals
      ↓
Career Vision
      ↓
Submit Application
      ↓
Application Successfully Received
```

---

# 6. Header

The header contains navigation and status information.

- **Logo:** "SMART.INC" on the left.
- **Status Pill:** "Application is now open" centered.
- **Partner Logo:** "INC JOIN" on the right.

---

# 7. Hero / Program Introduction

The hero section introduces the program.

- **Headline:** "Where Bold Ideas Meet Meaningful Impact"
- **Description:** Brief text describing the program focus (Robotics & AI).
- **Buttons:**
  - "Join the Waitlist →" (Primary, scrolls to form)
  - "Learn more" (Secondary, outline style)
- **Partnership text:** "SMART.INC x SMART.INC — Powered by Partnership"
- **Visual:** Holographic chair visualization with program details on the right.

---

# 8. Page Structure & Form Layout

Below the hero, the page features a centered section with the headline "Build Skills. Shape Your Future." and a description.
This leads into the multi-step application form container.

The form contains three tabs: Personal Info, Learning Goals, and Career Vision.

---

# 9. Form Step 1 — Personal Info

The first stage collects basic applicant details.

## 9.1 Full Name
**Type:** Text Input  
**Placeholder:** `e.g. Amara Okafor`  
**Required:** Yes  
**Validation:** Minimum 2 characters, maximum 150.

## 9.2 Email Address
**Type:** Email Input  
**Placeholder:** `you@example.com`  
**Required:** Yes  
**Validation:** Must be a valid email format, maximum 255 characters. Duplicate emails should present a friendly error message on submission.

## 9.3 Phone Number
**Type:** Telephone Input  
**Placeholder:** `+234 800 000 0000`  
**Required:** Yes  
**Validation:** Valid international phone number pattern, max 30 characters.

## 9.4 Age Range
**Type:** Select Dropdown  
**Placeholder:** `Select range`  
**Required:** Yes  
**Options:** Under 18, 18-24, 25-34, 35-44, 45+

## 9.5 Gender
**Type:** Select Dropdown  
**Placeholder:** `Select gender`  
**Required:** Yes  
**Options:** Male, Female, Non-binary, Prefer not to say

## 9.6 Current Level / Class
**Type:** Select Dropdown  
**Placeholder:** `Select level`  
**Required:** Yes  
**Options:** High School, Undergraduate, Graduate, Professional, Other

---

# 10. Form Step 2 — Learning Goals

The second stage of the application collects information about the applicant's learning interests.

## 10.1 What do you hope to learn from this program?
**Type:** Textarea  
**Placeholder:** `Tell us what skills, knowledge, or experience you'd like to gain.`  
**Required:** Yes  
**Validation:** Maximum 2000 characters.

## 10.2 Which areas are you most interested in?
**Type:** Multi-select  
**Required:** Yes  
**Validation:** Must select at least one option.  
**Options:**
- Design Thinking
- Robotics
- Artificial Intelligence
- Product Design
- Entrepreneurship
- Innovation
- Other

## 10.3 Have you worked on a project you're proud of?
**Type:** Textarea  
**Placeholder:** `Tell us briefly about a project, idea, or problem you've worked on.`  
**Required:** No  
**Validation:** Maximum 2000 characters.

---

# 11. Form Step 3 — Career Vision

The third stage collects information about the applicant's future goals.

## 11.1 What do you hope to achieve in the next 3–5 years?
**Type:** Textarea  
**Placeholder:** `Tell us about the career or impact you hope to create.`  
**Required:** Yes  
**Validation:** Maximum 2000 characters.

## 11.2 How do you see this program helping you get there?
**Type:** Textarea  
**Placeholder:** `Tell us how you think this program could support your goals.`  
**Required:** Yes  
**Validation:** Maximum 2000 characters.

## 11.3 What kind of impact would you like to create?
**Type:** Textarea  
**Placeholder:** `What problem would you like to help solve in your community, industry, or beyond?`  
**Required:** Yes  
**Validation:** Maximum 2000 characters.

---

# 12. Form Submission & Success State

The final action on Step 3 is "Continue →" (Submit Application).

- **Validation:** All inputs must be validated server-side.
- **Success State:** Upon successful database storage and email trigger, the form container should be replaced by a success message (e.g., "Application Successfully Received. We'll be in touch soon.").
- **Email Delivery:** Should NOT block the user interface. If email fails, the application should still be saved and user shown the success state.

---

# 13. Email Confirmation

An automated email must be sent upon successful waitlist application.

- **Sender:** `noreply@smart.inc` (or via configured SMTP)
- **Recipient:** The applicant's email address
- **Subject:** Application Received — SMART.INC Program
- **Content:** A simple text or HTML message confirming their application has been received and they will hear back soon.

---

# 14. Program Benefits (Why Join This Program?)

Below the form is a section highlighting program benefits in a grid of cards:

1. **Learn Design Thinking** (Master the 5-stage DT framework...)
2. **Build Real-World Solutions** (Move beyond theory. Collaborate in teams...)
3. **Access Industry Mentorship** (Get paired with robotics engineers...)
4. **Opportunity for Seed Funding** (Top teams gain access to DTC's innovation fund...)

---

# 15. Footer

The footer contains:
- **Logo:** SMART.inc
- **Links:** How it works, Programs, The Team
- **Socials:** Twitter, LinkedIn, Instagram
- **Copyright:** © 2026 SMART.INC All rights reserved.

---

# 16. Error Handling

- **Inline Errors:** Form fields must show validation errors inline below the field if client validation fails.
- **Server Errors:** Generic server errors should be displayed as a toast or banner.
- **Duplicate Email:** "You've already submitted an application with this email address."

---

# 17. Responsive Design

The application must be responsive.
- **Mobile/Tablet:** The form container should adapt to screen width. Grid layouts (like benefits cards) should collapse to 1 or 2 columns on smaller screens. Hero section content should stack.

---

# 18. Accessibility

- Maintain WCAG AA contrast standards.
- Use semantic HTML tags and proper `aria-labels` for form inputs.
- Ensure the form steps can be navigated with a keyboard.

---

# 19. Out of Scope

- User authentication / Login
- Applicant dashboards
- Payments
- Complex multi-page application flows
- Marketing integrations