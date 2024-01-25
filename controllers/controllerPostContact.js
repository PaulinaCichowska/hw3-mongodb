import { addContact } from "#models/contacts.js";
export const postContact = async (req, res, next) => {
    const result = req.body;
    try {
        const updatedContact = await addContact(result)
        res.status(201).json(updatedContact);
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ "message": 'Email must be unique' });
        }
        next(err)
    }
}

