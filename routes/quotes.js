const express = require('express');
const { findOne } = require('../models/quotes');
const router = express.Router();
const quote = require('../models/quotes');

//get all quotes
router.get('/', async (req, res) => {
    const quotes = await quote.find()
    res.json(quotes);
});

//New quotes
router.post('/new', async (req, res) => {
    const newQuote = new quote(req.body)
    const savedQuote = await newQuote.save();
    res.json(savedQuote);
});

//find a Quote by ID
router.get('/get/:id', async (req, res) => {
    const findQuote = await quote.findById({_id: req.params.id})
    res.json(findQuote)
});

//Delete quote
router.get('/delete/:id', async (req, res) => {
    const eraseQuote = await quote.findByIdAndDelete({_id: req.params.id});
    res.json(eraseQuote)
});

//Update quote
router.patch('/update/:id', async (req, res) =>{
    const updateQuote = await quote.updateOne({_id: req.params.id}, {$set: req.body})
    res.send(updateQuote)
});

module.exports = router;