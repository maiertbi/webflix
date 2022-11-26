const {Movie, validate, validateKey} = require('../models/movie'); 
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');
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

        // movies = await Movie.find({[qKey]: (query.value).toLowerCase().trim()});
        movies = await Movie.find({[qKey]: new RegExp((query.value).toLowerCase().trim())});



    }

    if (!movies) return res.status(404).send('No movies found or wrong queries passed.');
    res.send(movies);
});


// add a movie
router.post('/', [auth, admin], async (req, res) => { 
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


// delete a movie
router.delete('/', [auth, admin], async (req, res) => {
    const query = req.query;
    
    // check if a id has been passed
    if (!query.hasOwnProperty('id')) return res.status(400).send('No param called id has been found');;

    const movie = await Movie.findByIdAndDelete(query.id);
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


// change a movie
router.put('/', [auth, admin], async (req, res) => {
    const query = req.query;

    // check if a id has been passed
    if (!query.hasOwnProperty('id')) return res.status(400).send('No param called id has been found');;

    // check if syntax of body is correct
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = await Movie.findByIdAndUpdate(query.id,
        {
            picture: req.body.picture,
            title: req.body.title,
            director: req.body.director,
            published: req.body.published,
            genre: req.body.genre
        }, { new: true });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router; 