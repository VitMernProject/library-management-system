const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

// app.use(cors());
app.use(express.json());

//we link router file
app.use(require('./router/auth'));
app.use(require('./router/user'));
app.use(require('./router/book'));
app.use(require('./router/issue'));
app.use(require('./router/msg'));

const PORT = process.env.PORT;



// Middleware

const middleware = (req, res, next) => {
    console.log(`Hello middleware`);
    next();
}


app.get('/', (req, res) => {
    res.send(`Hello world from server`);
});

app.get('/about', middleware ,(req, res) => {
    res.send(`Hello (about) world from server`);
});

app.get('/contact', (req, res) => {
    res.cookie("jwtoken", 'sowji');
    res.send(`Hello (contact) world from server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello (signin) world from server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello (signup) world from server`);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})