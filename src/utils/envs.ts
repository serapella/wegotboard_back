import "dotenv/config";

const { SMTP_HOST, SMTP_USER, SMTP_PASS, TEMPLATE_MAILSENDER } = process.env;

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS);
console.log("TEMPLATE_MAILSENDER:", process.env.TEMPLATE_MAILSENDER);

// if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TEMPLATE_SENDER_MAIL) {
//   throw new Error("SMTP_HOST, SMTP_USER, SMTP_PASS are required");
// }

export { SMTP_HOST, SMTP_USER, SMTP_PASS, TEMPLATE_MAILSENDER };
