# Webflix

This project has been made by Sophie Eberle and Tobias Maier while studying abroad at the TU Dublin.

It is a ReactJS Web-App where you can watch movies/videos on demand (as a normal user) or you can add/change/delete movies/videos as admin.

As backend we used MongoDB with NodeJS. A RESTful API is used.

When talking about node we used the following packages:

- express
- joi
- mongoose

for auth use:

- config
- lodash
- jsonwebtoken
- bcrypt (hashes passwords)

## setup

### backend

We used Mongdb-community@6.0. To install and use this please this [docs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).

Also [NodeJS](https://nodejs.org/en/download/) is needed. This also includes npm.

Check if node.js is correctly installed with `node -v` and npm with `npm -v`.

If needed, update npm via `npm install npm -g`.

Then do the following commands:

```bash
cd backend/
npm install
export weblix_jwtPrivateKey=mySecureKey
```

Sophie:

- JSON Web Token
- to log out --> delete token on client-side (ex. localStorage or localStorage)

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
