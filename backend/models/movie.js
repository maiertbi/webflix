const Joi = require('joi');
const mongoose = require('mongoose');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    picture: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255
    },
    director: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255
    },
    published: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 4,
        match: /^(?:(?:19|20)[0-9]{2})$/
    },
    genre: {
        type: String,
        required: false,
        lowercase: true,
        enum: ['action', 'drama', 'horror', 'science fiction', 'thriller', 'crime']
    },

}));

function validateMovie(movie) {
    const schema = Joi.object({
        picture: Joi.string(), // TODO: change for pictures
        title: Joi.string().min(5).max(100).required(),
        director: Joi.string().min(5).max(255).required(),
        published: Joi.string().pattern(/^(?:(?:19|20)[0-9]{2})$/).required(),
        genre: Joi.string().min(4).valid('action', 'drama', 'horror', 'science fiction', 'thriller', 'crime')
    });

    return schema.validate(movie);
}

function validateKey(key) {
    const schemaKey = Joi.string().valid('title', 'director', 'published', 'genre');
    return schemaKey.validate(key);
}


exports.Movie = Movie;
exports.validate = validateMovie;
exports.validateKey = validateKey;