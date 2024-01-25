import { Contact } from "./Schema.js"


export const listContacts = () => {
  return Contact.find()
}

export const getContactById = async (contactId) => {
  return Contact.findById(contactId);
}

export const removeContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
}

export const addContact = async (body) => {
  const { name, email, phone, favourite } = body
  return Contact.create({ name, email, phone, favourite })
}

export const updateContact = async ({ contactId, toUpdate, upsert = false }) => {
  return Contact.findOneAndUpdate(
    { _id: contactId },
    { $set: toUpdate },
    { new: true, runBalidators: true, strict: "throw", upsert }
  )
}


