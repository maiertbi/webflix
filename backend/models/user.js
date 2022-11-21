const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = mongoose.model('Users', new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255
    },
    email: {
        lowercase: true,
        required: true,
        trim: true,
        unique: true,
        minLength: 5,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
        trim: true
    },
    isAdmin: Boolean
}));

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        isAdmin: Joi.boolean().required()
    });

    return schema.validate(movie);
}



exports.User = userSchema;
exports.validate = validateUser;