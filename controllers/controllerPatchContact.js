import { updateContact } from "#models/contacts.js";
export const patchContact = async (req, res, next) => {
    const { contactId } = req.params;
    const { favorite } = req.body

    try {
        if (favorite === undefined) {
            res.status(400).json({ "message": "missing field favorite" })
        } else {
            const updatedContact = await updateContact({ contactId, toUpdate: req.body })
            res.status(200).json(updatedContact)
        }
    } catch (err) {
        next(err)
    }
}
