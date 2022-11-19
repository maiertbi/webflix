const {Movie, validate} = require('../models/movie'); 
// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

let movies = [
    {
        "picture": "This is a picture",
        "title": "KeinOhrHasen",
        "director": "Hans Zimmer",
        "genres": ["horror", "fantasy", "action"],
        "published": "2020"
    },

    {
        "picture": "This is picture 2",
        "title": "Inception",
        "director": "Christopher Nolan",
        "genres": ["thriller", "action"],
        "published": "2019"
    }
];


// get all movies
router.get('/', async (req, res) => {
    // const movies = await Movie.find().sort('title');
    res.send(movies);
});

// get all movies with specific criteria (title, director, genre, ...)
router.get('/:key&:value', async (req, res) => {
    // const movies = await Movie.findById(req.params.id);
    // if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movies);
});


// add a movie
router.post('/', async (req, res) => { 
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // console.log(typeof req.body.genres) !!!!

    const movie = new Movie({
        picture: req.body.picture,
        title: req.body.title,
        director: req.body.director,
        published: req.body.published,
        genres: req.body.genres
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