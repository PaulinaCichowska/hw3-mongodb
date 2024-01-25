import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 30,
        required: true,
    },
    email: {
        type: String,
        unique: [true, 'This email is already in use'],
        required: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        }
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })
export const Contact = mongoose.model("contact", contactSchema, "contacts")