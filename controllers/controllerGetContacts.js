import { listContacts } from "#models/contacts.js";
export const getContacts = async (req, res, next) => {
    const list = await listContacts();
    if (!list) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(list);
}