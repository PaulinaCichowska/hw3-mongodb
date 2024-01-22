import { getContactById } from "#models/contacts.js";
export const getContact = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId)
    if (!contact) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(contact);
}