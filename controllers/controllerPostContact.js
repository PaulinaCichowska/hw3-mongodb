import Joi from "joi";
import { addContact } from "#models/contacts.js";
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    phone: Joi.required()
});

export const postContact = async (req, res, next) => {
    const result = schema.validate(req.body);
    const addedContact = result.value
    const updatedContacts = await addContact({ result })

    if (result.error) {
        return res.json({ "message": "missing required name - field" })
    } else {
        return res.status(201).json({ message: "Contact has been added successfully" });
    }
}

