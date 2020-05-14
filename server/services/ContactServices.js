const ContactModel = require("../models/ContactModel");

const contactModel = ContactModel;

class ContactServices {
  async create(contactDetails) {
    const result = await contactModel.create(contactDetails, {
      fields: ["id"],
    });
    return {
      success: true,
      message: "Contact Successfully Added",
      data: result,
    };
  }
}

module.exports = new ContactServices();
