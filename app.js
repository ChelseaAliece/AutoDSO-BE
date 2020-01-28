const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database ' + err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

//CORS Middleware 
app.use(cors());

//set static folder 
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(passport.session());

require("./config/passport")(passport);

app.use('/users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//start server
app.listen(port, () => {
    console.log('Server statrted as port ' + port);
});