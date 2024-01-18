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
    res.status(201).json({ name });
  }
  res.status(404).json({ message: "missing required name - field" })

})


router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

export default router
