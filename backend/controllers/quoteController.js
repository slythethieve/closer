const asyncHandler = require('express-async-handler')

const Quote = require('../models/quoteModel')

// @desc    Get quotes
// @route   GET /api/quotes
// @access  Private
const getQuotes = asyncHandler(async (req, res) => {
  const quotes = await Quote.find()
    res.status(200).json(quotes)
})

// @desc    Set quote
// @route   POST /api/quotes
// @access  Private
const setQuote = asyncHandler(async (req, res) => {

  const quote = await Quote.create({
    totalPrice: req.body.totalPrice,
  })
  res.status(200).json(quote)
})

// @desc    Update quote
// @route   PUT /api/quotes/:id
// @access  Private
const updateQuote = asyncHandler(async (req, res) => {
  const quote = await Quote.findById(req.params.id)
  if(!quote) {
    res.status(400)
    throw new Error('Quote not found')
  }

  const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
    new:true
  })
  res.status(200).json(updatedQuote)
})

// @desc    Delete quote
// @route   DELETE /api/quotes/:id
// @access  Private
const deleteQuote = asyncHandler(async (req, res) => {
  const quote = await Quote.findById(req.params.id)
  if(!quote) {
    res.status(400)
    throw new Error('Quote not found')
  }
  await quote.remove()
  res.status(200).json({
    id: req.params.id
  })
})

module.exports = {
  getQuotes,
  setQuote,
  updateQuote,
  deleteQuote,
}