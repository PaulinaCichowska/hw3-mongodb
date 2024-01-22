import express from "express"

import { getContact } from "#controllers/controllerGetContact.js"
import { getContacts } from "#controllers/controllerGetContacts.js"
import { delateContact } from "#controllers/controllerDelateContact.js"
import { postContact } from "#controllers/controllerPostContact.js"
import { putContact } from "#controllers/controllerPutContact.js"

const router = express.Router()

router.get('/', getContacts)
router.get('/:contactId', getContact)
router.delete('/:contactId', delateContact)
router.post('/', postContact)
router.put('/:contactId', putContact)

export default router
