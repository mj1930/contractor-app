import express from "express";
import { confirmOTP, requestOTP } from "src/controllers/auth.controller";
import { validate } from "src/middleware/validate";
import { phoneSchema, verifyOTPSchema } from "src/schemas/auth.schema";

const authRoutes = express.Router();

authRoutes.post("/request-otp", requestOTP);
// authRoutes.post("/verify-otp", validate(verifyOTPSchema), confirmOTP);

export default authRoutes;
