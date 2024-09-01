import * as z from "zod";

const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((value) => /\d/.test(value), {
    message: "Password must contain at least one number",
  })
  .refine((value) => /[\W_]/.test(value), {
    message: "Password must contain at least one special character",
  });

export const RegisterSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }).min(3, {
    message: "First name must be at least 3 characters",
  }),
  last_name: z.string().min(1, { message: "Last name is required." }).min(3, {
    message: "Last name must be at least 3 characters",
  }),
  email: z.string().min(1, { message: "Field is required" }).email({
    message: "Invalid email address",
  }),
  password: passwordSchema,
});

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid email address",
  }),
  password: passwordSchema,
  rememberMe: z.boolean().default(false).optional(),
});

export const OtpSchema = z.object({
  token: z.string(),
  email: z.string().email().optional(),
});

export const ContactSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
