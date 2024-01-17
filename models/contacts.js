import path from "path"
import fs from "fs/promises"

const contactsPath = path.join(process.cwd(), 'models', 'contacts.json');

export const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parseData = JSON.parse(data);
    return parseData
  } catch (err) {
    console.log(err);
  }
}

export const getContactById = async (contactId) => {
  console.log("xd")
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    const [contact] = parseData.filter(el => el.id === contactId)

    return contact
  } catch (err) {
    return console.log(err);
  }
}

export const removeContact = async (contactId) => { console.log("xd") }

export const addContact = async (body) => { console.log("xd") }

export const updateContact = async (contactId, body) => { console.log("xd") }


