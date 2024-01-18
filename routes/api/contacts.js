import express from "express"
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} from '../../models/contacts.js'

const router = express.Router()
const test = [{
  test: 1,
  id: 1,
}]

router.get('/', async (req, res, next) => {
  const list = await listContacts();
  if (!list) {
    return res.status(404).json({ message: "not found" });
  }
  res.status(200).json(list);
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId)
  if (!contact) {
    return res.status(404).json({ message: "not found" });
  }
  res.status(200).json(contact);
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const updatedContacts = await removeContact(contactId)
  if (!updatedContacts) {
    return res.status(404).json({ message: "not found" });
  }
  res.status(200).json({ message: "contact deleted" })
})

router.post('/', async (req, res, next) => {
  const { name, phone, email } = req.body;
  const updatedContacts = await addContact({ name, phone, email })
  if (updatedContacts) {
    return res.status(201).json({ name });
  }


});


router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const { name, phone, email } = req.body;
  const updatedContacts = await updateContact(contactId, { name, phone, email })
  if (name === undefined) {
    return res.json({ "message": "missing fields" })
  } else {
    return res.status(201).json({ name });
  }

  res.status(404).json({ message: "not found" });
})

export default router
