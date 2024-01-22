import { removeContact } from "#models/contacts.js";

export const delateContact = async (req, res, next) => {
    const { contactId } = req.params;
    const updatedContacts = await removeContact(contactId)
    if (!updatedContacts) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "contact deleted" })
}