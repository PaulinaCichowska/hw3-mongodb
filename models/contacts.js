import path from "path"
import fs from "fs/promises"
import { nanoid } from 'nanoid'

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
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    const [contact] = parseData.filter(el => el.id === contactId)
    return contact
  } catch (err) {
    return console.log(err);
  }
}

export const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    const index = parseData.findIndex(contact => contact.id === contactId);
    const contact = parseData.find(contact => contact.id === contactId)
    if (contact) {
      parseData.splice(index, 1);
      const updatedContacts = JSON.stringify(parseData, null, 2);
      fs.writeFile(contactsPath, updatedContacts, 'utf-8');
      return true
    }
    return false
  } catch (err) {
    return console.log(err);
  }
}

export const addContact = async (body) => {
  const ID = nanoid();

  try {
    const newContact = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      id: ID,
    };

    const data = await fs.readFile(contactsPath, 'utf-8');
    let dataParse = JSON.parse(data);
    console.log(newContact, "xd")
    if (dataParse.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      return false
    } else {
      dataParse.push(newContact);

      const updatedContacts = JSON.stringify(dataParse, null, 2);
      fs.writeFile(contactsPath, updatedContacts, 'utf-8');
      return true
    }


  } catch (err) {
    return console.log(err);
  }
}

export const updateContact = async (contactId, body) => { console.log("xd") }


