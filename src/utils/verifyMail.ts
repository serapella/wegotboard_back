import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { Recipient, EmailParams, MailerSend } from "mailersend";
import { SMTP_USER } from "./envs";

const mailersend = new MailerSend({ apiKey: process.env.MAILERSEND_API_KEY as string });

export const sendVerificationEmail = async (userEmail: string, userId: string): Promise<void> => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
    const recipients = [new Recipient(userEmail, "New User")];
    const personalization = [
      {
        email: userEmail,
        data: { verification_link: verificationLink },
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(SMTP_USER as any)
      .setTo(recipients)
      .setSubject("Verify Your Email")
      .setTemplateId("ynrw7gyx5vkl2k8e")
      .setPersonalization(personalization);

    await mailersend.email.send(emailParams);
    console.log("Verification email sent to:", userEmail);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
