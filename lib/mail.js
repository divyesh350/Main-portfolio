import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async ({ from, to, subject, message }) => {
  const mailOptions = {
    from: `${from.name} <${from.email}>`,
    to: `${to.name} <${to.email}>`,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`, // Fixed: Added missing html property
  };

  const result = await transport.sendMail(mailOptions);
  return result;
};
