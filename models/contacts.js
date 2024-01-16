// const fs = require('fs/promises')
const contactsPath = path.join(__dirname, 'models', 'contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parseData = JSON.parse(data);
    return parseData
  } catch (err) {
    console.log(err);
  }
}

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    parseData.map(contact => {
      if (contactId == contact.id) {
        message = `${contact.name}\n${contact.email}\n${contact.phone}`.green
      }
    });

    console.log(message)
  } catch (err) {
    return console.log(err);
  }
}

const removeContact = async (contactId) => { }

const addContact = async (body) => { }

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
