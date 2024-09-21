import * as z from "zod";

// const passwordSchema = z
//   .string()
//   .min(1, { message: "Password is required" })
//   .min(8, { message: "Password must be at least 8 characters long" })
//   .refine((value) => /[a-z]/.test(value), {
//     message: "Password must contain at least one lowercase letter",
//   })
//   .refine((value) => /[A-Z]/.test(value), {
//     message: "Password must contain at least one uppercase letter",
//   })
//   .refine((value) => /\d/.test(value), {
//     message: "Password must contain at least one number",
//   })
//   .refine((value) => /[\W_]/.test(value), {
//     message: "Password must contain at least one special character",
//   });

// export const RegisterSchema = z.object({
//   first_name: z.string().min(1, { message: "First name is required." }).min(3, {
//     message: "First name must be at least 3 characters",
//   }),
//   last_name: z.string().min(1, { message: "Last name is required." }).min(3, {
//     message: "Last name must be at least 3 characters",
//   }),
//   email: z.string().min(1, { message: "Field is required" }).email({
//     message: "Invalid email address",
//   }),
//   password: passwordSchema,
// });

// export const LoginSchema = z.object({
//   email: z.string().min(1, { message: "Email is required" }).email({
//     message: "Invalid email address",
//   }),
//   password: passwordSchema,
//   rememberMe: z.boolean().default(false).optional(),
// });

// export const OtpSchema = z.object({
//   token: z.string(),
//   email: z.string().email().optional(),
// });

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters long") // Minimum length validation
    .min(1, "Full Name is required"), // Check for non-empty string
  email: z
    .string()
    .email("Must be a valid email address")
    .min(1, "Email Address is required"), // Check for non-empty string
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long") // Minimum length validation
    .min(1, "Message is required"), // Check for non-empty string
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
