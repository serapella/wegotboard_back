import dotenv from "dotenv";
dotenv.config();
import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";
import { TEMPLATE_MAILSENDER, SMTP_USER } from "./envs";
import { EmailData } from "./types";

export const sendEmail = async (data: EmailData) => {
  try {
    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY as string,
    });
    const recipients = [new Recipient(data.email, data.name)];
    const personalization = [
      {
        email: data.email,
        data: {
          name: data.name,
          link: data.link,
        },
      },
    ];
    const emailParams = new EmailParams({
      from: new Sender(SMTP_USER as string, "WeGotBoard"),
      to: recipients,
      subject: "Verify your email",
      templateId: TEMPLATE_MAILSENDER,
      personalization: personalization,
    });

    if (TEMPLATE_MAILSENDER) {
      emailParams.setTemplateId(TEMPLATE_MAILSENDER as string);
      emailParams.setPersonalization(personalization);
    } else {
      emailParams.setText(
        `Hello ${data.name}, please verify your email using this link: ${data.link}`
      );
    }
    const response = await mailersend.email.send(emailParams);
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error(error);
    console.log("Failed to send email");
    throw error;
  }
};
