import Joi from "joi";
import {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
} from '../models/contacts.js'

const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    phone: Joi.required()
});

export const getContacts = async (req, res, next) => {
    const list = await listContacts();
    if (!list) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(list);
}

export const getContact = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId)
    if (!contact) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(contact);
}
export const delateContact = async (req, res, next) => {
    const { contactId } = req.params;
    const updatedContacts = await removeContact(contactId)
    if (!updatedContacts) {
        return res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "contact deleted" })
}

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