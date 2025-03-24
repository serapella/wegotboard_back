import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import * as ms from "ms";
import { EmailData } from "./types";
import { SMTP_USER, MAILERSEND_API_KEY } from "./envs";

interface UserPayload {
  _id: Types.ObjectId;
  email: string;
  name: string;
}

interface Params {
  user: UserPayload;
  secret: string;
  expiresIn: number | ms.StringValue | undefined;
}

export const signToken = ({ user, secret, expiresIn }: Params) => {
  const token = jwt.sign(user, secret, { expiresIn });
  return token;
};

export const sendEmailTo = async (data: EmailData) => {
  try {
    const mailerSend = new MailerSend({
      apiKey: MAILERSEND_API_KEY as string,
    });
    const sentFrom = new Sender(SMTP_USER as string, "TEST");
    const recipients = [new Recipient(data.email, data.name)];
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("This is a Subject")
      .setHtml("<strong>This is the HTML content</strong>")
      .setText("This is the text content");
    const response = await mailerSend.email.send(emailParams);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
