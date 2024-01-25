import { updateContact } from '#models/contacts.js'
export const putContact = async (req, res, next) => {
    const { contactId } = req.params;
    try {
        const result = await updateContact({ contactId, toUpdate: req.body, upsert: true })
        res.json(result)
    } catch (err) {
        next(err)
    }
}