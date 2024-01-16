const express = require('express')
const { listContacts, getContactById, addContact, removeContact } = require('./models/contacts')

const router = express.Router()
const test = [{
  test: 1,
}]

router.get('/', async (req, res, next) => {

  res.json({ test })
})

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
