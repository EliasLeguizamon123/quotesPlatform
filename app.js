const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({ path: './.env'});

//Settings 
const app = express();
require('./database/database.js')

var quotesRouter = require('./routes/quotes');

//Routes
app.use(require('./routes/quotes.js'));
app.use('/quotes', quotesRouter);


//Middleware
app.use(bodyParser.json());

//Starting server
app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});

module.exports = app;