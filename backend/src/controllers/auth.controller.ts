import { Request, Response } from "express";
import { sendOTP, verifyOTP } from "src/services/auth.service";
import { User } from "src/models/user.model";

export const requestOTP = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    await sendOTP(phone);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to send OTP",
    });
  }
};

export const confirmOTP = async (req: Request, res: Response) => {
  const { phone, code } = req.body;
  try {
    const verification = await verifyOTP(phone, code);
    if (verification.status === "approved") {
      let user = await User.findOne({ phone });
      if (!user) user = new User({ phone, verified: true });
      else user.verified = true;
      await user.save();
      return res.status(200).json({
        message: "Phone verified successfully",
        user,
      });
    }
    res.status(400).json({ error: "Invalid code" });
  } catch (error) {
    res.status(400).json({ error: "Verification failed" });
  }
};
