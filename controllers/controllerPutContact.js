import Joi from "joi";
import { updateContact } from '#models/contacts.js'

const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    phone: Joi.required()
});

export const putContact = async (req, res, next) => {
    const { contactId } = req.params;
    const result = schema.validate(req.body);
    const updatedContacts = await updateContact(contactId, result)
    const contactName = result.value.name
    if (result.error) {
        return res.json({ "message": "missing fields" })
    }
    if (updateContact) {
        return res.status(201).json({ "message": `${contactName} has been updated ` });
    } else {
        return res.status(404).json({ message: "not found" });
    }
}