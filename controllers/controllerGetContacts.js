import { listContacts } from "#models/contacts.js";
export const getContacts = async (req, res, next) => {
    try {
        const contacts = await listContacts()
        res.json(contacts)
    } catch (err) {
        next(err)
    }

}