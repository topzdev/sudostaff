const nodemailer = require("nodemailer");
const config = require("../../config/index").mailer;

class MailerServices {
  async send(message) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: config.email,
        pass: config.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: message.email,
      to: message.to,
      subject: message.subject,
      text: message.text,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      return {
        status: 200,
        msg: "Email Suceessfully Sent",
        data: result,
      };
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = new MailerServices();
