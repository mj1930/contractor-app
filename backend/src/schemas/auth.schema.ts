import { z } from "zod";

export const phoneSchema = z.object({
  phone: z.string().regex(/^\+\d{10,15}$/, "Invalid phone number"),
});

export const verifyOTPSchema = z.object({
  phone: z.string().regex(/^\+\d{10,15}$/),
  code: z.string().length(6),
});
