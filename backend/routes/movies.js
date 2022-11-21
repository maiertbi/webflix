const {Movie, validate, validateKey} = require('../models/movie'); 
const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const router = express.Router();
const _ = require('lodash');


// get movies
router.get('/', async (req, res) => {
    const query = req.query;

    let movies = null;
    if (_.isEmpty(query)) { // if no params got passed
        movies = await Movie.find().sort('title');
    } else if (query.hasOwnProperty('id')) { // if a param named 'id' was passed
        movies = await Movie.findById(query.id);
    } else if (query.hasOwnProperty('key') && query.hasOwnProperty('value')) { // if key & value were passed
        const qKey = (query.key).toLowerCase().trim();
        
        // check if key is valid
        const {error} = validateKey(qKey);
        if (error) return res.status(400).send(error.details[0].message);

        movies = await Movie.find({[qKey]: (query.value).toLowerCase().trim()});
    }

    if (!movies) return res.status(404).send('No movies found or wrong queries passed.');
    res.send(movies);
});



// add a movie
router.post('/', async (req, res) => { 
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = new Movie({
        picture: req.body.picture,
        title: req.body.title,
        director: req.body.director,
        published: req.body.published,
        genre: req.body.genre
    });
    await movie.save();

    res.send(movie); 
});





// change a movie
    /*
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        }, { new: true });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});
    */



// delete a movie
router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


module.exports = router; 