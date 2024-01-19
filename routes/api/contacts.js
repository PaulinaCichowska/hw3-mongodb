import express from "express"

import { getContact, getContacts, delateContact, postContact, putContact } from '../../controllers/controllersContacts.js'

const router = express.Router()

router.get('/', getContacts)

router.get('/:contactId', getContact)

router.delete('/:contactId', delateContact)

router.post('/', postContact);

router.put('/:contactId', putContact)

export default router
