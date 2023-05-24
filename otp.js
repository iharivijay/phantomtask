import dotenv from "dotenv";
import twilio from "twilio";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

const generateOtp = () => Math.floor(Math.random() * 900000) + 100000;

const sendOtp = async () => {
  let otp = generateOtp();
  await twilioClient.messages.create({
    body: `OTP for Login is ${otp}`,
    from: process.env.TWILIO_FROM_NUMBER,
    to: "+919876543210",
  });
};

export { sendOtp };
