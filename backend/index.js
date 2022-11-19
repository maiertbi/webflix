const movies = require('./routes/movies');
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// connecting to mongodb


// using everything
app.use(express.json());
app.use('/api/movies', movies);

// setting up port/routes
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));