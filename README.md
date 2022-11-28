# Webflix

This project has been made by Sophie Eberle and Tobias Maier while studying abroad at the TU Dublin.

It is a ReactJS Web-App where you can watch movies/videos on demand (as a normal user) or you can add/change/delete movies/videos as admin.

As backend we used MongoDB with NodeJS. A RESTful API is used.

## setup

### backend

> This setup was only checked if it works on Mac OS X!

We used Mongdb-community@6.0. To install and use this please this [docs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).

Also [NodeJS](https://nodejs.org/en/download/) is needed. This also includes npm.

Check if node.js is correctly installed with `node -v` and npm with `npm -v`.

If needed, update npm via `npm install npm -g`.

Then do the following commands:

```bash
cd backend/
npm install
export webflix_jwtPrivateKey=mySecureKey
```

```bash
cd frontend/webflixfrontend/
npm install
```

Instead of *mySecureKey* you can instert anything you want. This is just for creating a local variable in order to have a secure key for using JSON Web Token.

Everything should work on the backend side, if mongodbcommunity is running. When testing you just have to execute `node index.js`.

## using the project

### filling the db

We provided a JSON in order to fill the database with data.
You will find them in the folder `cd backend/mongodb-sample/`.
In MongoDB Compass, create a new database called *webflix* and then create two collections named *movies* and *users*
Then you can import the sample-data with MongoDB Compass into MongoDB.

However, you can also make everything via Postman!

The password for the user tbimaier@gmail.com is *helloworld234* and for sophie.eberle@gmail.com it is *byemars432*.

### preparing the project

If you want to start the project you have to do the following things.

```bash
cd backend/
node index.js
```

And in a new terminal (of the webflix folder) execute the following:

```bash
cd frontend/webflixfrontend
npm start
```

You can now visit the page. Probably on port 3006.

## app usage

You start on the Sign in page and log in with your user data.
![SignIn!](/frontend/webflixfrontend/public/pictures/SignIn.jpg "Sign in page")

If the login was successful, you will be redirected to this page:
![SignedIn!](/frontend/webflixfrontend/public/pictures/Signed_In.jpg "Signed in page")

After that you have to click on the "Go to Webflix" button to get to the homepage.
![Home!](/frontend/webflixfrontend/public/pictures/Home.jpg "Home page")

On the homepage you can filter and search for films by genre, year, director or title. If you like a film, you can save it as a favourite (this can also be removed again):
![FavouriteMovies!](/frontend/webflixfrontend/public/pictures/Favourites.jpg "favourite movies")

You can also add a film yourself by clicking on + Add Movie in the navigation bar:
![AddMovie!](/frontend/webflixfrontend/public/pictures/AddMovie.jpg "Add movie page")

Of course you can also edit films by clicking on the name of the film you are looking for. You will then be taken to the changeMovie page:
![changeMovie!](/frontend/webflixfrontend/public/pictures/changeMovie.jpg "change a movie page")

If you want to log out, just click on your username in the navbar, then the dropdown window will open and you can click on logout:
![Logout!](/frontend/webflixfrontend/public/pictures/Logout.jpg "logout page")

## developing

### how does the backend work

We made a RESTful API with Express in order to connect MongoDB with the Frontend.
In order to authenticate the user we used JSON Web Token (JWT).

You can find the correct syntax of the http requests in index.js and in the routes folder.

Be aware that most of the times, when dealing with users, you will get back a JWT. **You have to store it somewhere on the client side (ex. Local Storage or Session Storage).** For every request which deals with certain permissions (deleting a movie, ...) you have to add {x-auth-token: JWT} in the header of the http request. Therefore malicious activity is prevented.

We provided a jsonFile for *Postman* with sample HTTP requests into the backend folder. **It is not guaranteed that the requests will work**. You probably have to change some data in order to get it working.
