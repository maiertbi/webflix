const jwt = require('jsonwebtoken');
const config = require('config');

const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 50
    },
    email: {
        type: String,
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
}); 

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        isAdmin: Joi.boolean().required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;