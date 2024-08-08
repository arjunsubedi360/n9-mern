export const accountCreatedTemplate = (name, email) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Creation Successful</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
    </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Welcome to Our Service!</h1>
            </div>
            <div class="content">
                <p><b>Hello ${name},</b></p>
                <p>Thank you for creating an account with us! We are excited to have you on board.</p>
                <p>Your registered email address is: <strong>${email}</strong></p>
                <p>If you have any questions or need assistance, feel free to contact our support team.</p>
                <p>Best regards,<br>The Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Our Company. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
