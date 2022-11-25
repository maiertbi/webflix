# Webflix

This project has been made by Sophie Eberle and Tobias Maier while studying abroad at the TU Dublin.

It is a ReactJS Web-App where you can watch movies/videos on demand (as a normal user) or you can add/change/delete movies/videos as admin.

As backend we used MongoDB with NodeJS. A RESTful API is used.

When talking about node we used the following packages:

- express
- joi
- mongoose
- config
- lodash
- jsonwebtoken
- bcrypt
- config

## setup

### backend

> This setup was only checked if works on Mac OS X.

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

Instead of *mySecureKey* you can instert anything you want. This is just for creating a local variable in order to have a secure key for using JSON Web Token.

Everything should work on the backend side, if mongodbcommunity is running. When testing you just have to execute `node index.js`.

## using the project

If you want to start the project you have to do the following things.

```bash
cd backend/
node index.js
```

And in a new terminal (of the webflix folder) execute the following:

```bash
cd frontend/
```

## developing

### how does the backend work

We made a RESTful API with Express in order to connect MongoDB with the Frontend.
In order to authenticate the user we used JSON Web Token (JWT).

You can find the correct syntax of the http requests in index.js and in the routes folder.

Be aware that most of the times, when dealing with users, you will get back a JWT. **You have to store it somewhere on the client side (ex. Local Storage or Session Storage).** For every request which deals with certain permissions (deleting a movie, ...) you have to add {x-auth-token: JWT} in the header of the http request. Therefore malicious activity is prevented.

We provided a jsonFile for *Postman* with sample HTTP requests into the backend folder. **It is not guaranteed that the requests will work**. You probably have to change some data in order to get it working.

## Error Messages
Access to fetch - ist fehlgeschlagen wegen der "CORS-policy" - No Access-Controll-Allow-Origin 

(wie schon erklärt man will Daten von A nach B fetchen und wird vom Browser geblockt)
Mit Ajax hat es den Fehler zum Teil behoben vorher hab ich die Url in der app.js datei versucht zu fetchen aber kein erfolg. 


Aber neuer Error kam auf weil der (user) token nicht übergeben wurde. 
Fehlermeldung: Request failed with status code 404.

Da hat Fabi gemeint den könnte man im Header hinzufügen. ("header:" befindet sich im File axios.js und das im Ordner api) - Hab es auskommentiert. Dort sollte der User token stehen. Da der bei uns aber eigentlich bei jedem sign in anders ist - hab ich nicht gewusst wie ich den angeben soll.  

mein ansatz gestern war sowas in die Richtung:
const instance = axios.create({
  url: "http://localhost:3000",
  type: 'GET',
  // Fetch the stored token from localStorage and set in the header
  headers: {"Authorization": localStorage.getItem('token')}
});

derzeit kommt man zur login seite in dem man nur localhost:3000 (nach Sign In wird man auf die "http://localhost:3000/home" seite navigiert - darum kümmer ich mich sobald der Login funktioniert)