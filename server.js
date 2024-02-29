require('dotenv').config()
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const jwt = require('express-jwt');
const dir = __dirname + "/views/"

const app = express();
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`);

app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log('listenning port 3000')
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public',express.static('public'));

app.get('/', async (req, res) => {
    res.render(createPath('index'))
})
app.get('/signup', async (req, res) => {
    res.render(createPath('signup'))
})
app.get('/filmpage', async (req, res) => {
    res.render(createPath('filmpage'))
})
app.get('/pricing', async (req, res) => {
    res.render(createPath('pricing'))
})
app.get('/all', async (req, res) => {
    res.render(createPath('all'))
})