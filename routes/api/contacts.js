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
  res.json(list);
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId)
  if (!contact) {
    return res.status(404).json({ message: "not found" });
  }
  res.json(contact);
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

export default router
