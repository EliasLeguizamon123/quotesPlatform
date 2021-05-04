const express = require('express');

require('dotenv').config({ path: './.env'});

//Settings 
const app = express();
require('./database/database.js')

var quotesRouter = require('./routes/quotes');

//Routes
app.use(require('./routes/quotes.js'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/quotes', quotesRouter);

//Starting server
app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});

// Get random quote
router.get('/random', async (req, res) => {
	const count = await Quote.countDocuments();
	const random = Math.floor(Math.random() * count);
	const randomQuote = await Quote.findOne().skip(random);
	res.json(randomQuote);
});

module.exports = app;