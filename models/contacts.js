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
  try {
    const Id = nanoid()
    const newContact = {
      name: body.result.value.name,
      email: body.result.value.email,
      phone: body.result.value.phone,
      id: Id,
    }
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    const contact = parseData.find(contact => contact.name === body.result.value.name)
    const newContacts = [...parseData]
    newContacts.push(newContact)
    if (!contact && !body.error) {
      const updatedContacts = JSON.stringify(newContacts, null, 2);
      fs.writeFile(contactsPath, updatedContacts, 'utf-8')
      return true
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateContact = async (contactId, body) => {
  try {
    const Id = nanoid()
    const newContact = {
      name: body.value.name,
      email: body.value.email,
      phone: body.value.phone,
      id: contactId,
    }
    const data = await fs.readFile(contactsPath, 'utf-8');
    const parseData = JSON.parse(data);
    const contact = parseData.find(contact => contact.id === contactId)
    const index = parseData.findIndex(contact => contact.id === contactId)
    if (contact && !body.error) {
      const copy = [...parseData]
      copy.splice(index, 1, newContact)
      const updatedContacts = JSON.stringify(copy, null, 2);
      fs.writeFile(contactsPath, updatedContacts, 'utf-8')
      return true
    }

  } catch (err) {
    console.log(err)
  }
}


