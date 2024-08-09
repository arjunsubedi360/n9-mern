import nodemailer from "nodemailer";
import { smptPassword } from "../config/index.js";


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'mailtoarjunsubedi@gmail.com',
    pass: smptPassword
  }
});

export function sendMail({ to, subject, text, html }) {
  console.log({to, subject, html})
  try {
    const transport = transporter.sendMail({
      from: '"Mero Shoe" <mailtoarjunsubedi@gmail.com>',
      to,
      subject,
      text,
      html,
    });

    console.log(`Email send to ${to}`);
    return transport;
  } catch (error) {
    console.log("error", error);
  }
}
