const express = require('express')
const router = express.Router();
const quote = require('../models/quotes');
//get all routes
router.get('/', async (req, res) => {
    // const quotes = await quote.find()
    // res.json(quotes);
    res.send('Ok its work')
});

//New quotes
router.post('/new', async (req, res) => {
    // const newQuote = new quote(req.body)
    // const savedQuote = await newQuote.save();
    // res.json(savedQuote);
    res.send('its work')
});

module.exports = router;