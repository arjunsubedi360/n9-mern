import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'mailtoarjunsubedi@gmail.com',
    pass: 'jcbkuicxnglnrhhv'
  }
});

/**
 * Send an email using the specified options
 * @param {string} to - The recipient's email address
 * @param {string} subject - The subject of the email
 * @param {string} text - The plain text body of the email
 * @param {string} html - The HTML body of the email
 * @returns {Promise<void>}
 */
export const sendMail = async ({ to, subject, text, html }) => {
  try {
    // Set up email data
    const mailOptions = {
      from: '"Mero Order" <mailtoarjunsubedi@gmail.com>', // sender address
      to, // recipient address
      subject, // Subject line
      text, // plain text body
      html // html body
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};