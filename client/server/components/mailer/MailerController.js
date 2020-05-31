const { validateResponse } = require("../../helpers/validateResponse");
const mailerServices = require("./MailerServices");

class MailerController {
  constructor() {
    console.log("Mailer Controller");
  }
  async sendEmails(req, res) {
    try {
      const result = await mailerServices.send(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new MailerController();
