import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL as string,
    pass: process.env.PASSWORD as string,
  },
});

export async function handleSendMail(email: string, randomAuthCode: string) {
  const mailOptions = {
    from: {
      name: "Newsletter SignUp With Email Auth",
      address: process.env.EMAIL as string,
    },
    to: email,
    subject: "NIHIL",
    text: "Random Code: " + randomAuthCode,
    html: emailTemplate.replace("{{randomCode}}", randomAuthCode),
  };

  await transporter.sendMail(mailOptions);
}
