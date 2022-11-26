const config = require('config');
const cors = require('cors');
const movies = require('./routes/movies');
const user = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// auth
if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

// connecting to mongodb (if webflix is not created --> it will get initialized automatically)
mongoose.connect('mongodb://localhost/webflix')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// making cors options
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}



// using everything
app.use(express.json());
app.use(cors()); // cors(corsOptions)


app.use('/api/movies', movies);
app.use('/api/user', user);
app.use('/api/auth', auth);

// setting up port/routes
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));