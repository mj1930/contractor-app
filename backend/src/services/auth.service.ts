import twilio from "src/config/twilio";

export const sendOTP = async (phone: string) => {
  return await twilio.verify.v2
    .services(process.env.TWILIO_SERVICE_SID!)
    .verifications.create({
      to: phone,
      channel: "sms",
    });
};

export const verifyOTP = async (phone: string, code: string) => {
  return await twilio.verify.v2
    .services(process.env.TWILIO_SERVICE_SID!)
    .verificationChecks.create({
      to: phone,
      code,
    });
};
