const asyncHandler = require('express-async-handler')

// @desc    Get quotes
// @route   GET /api/quotes
// @access  Private
const getQuotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get quotes' })
})

// @desc    Set quote
// @route   POST /api/quotes
// @access  Private
const setQuote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Set quote' })
})

// @desc    Update quote
// @route   PUT /api/quotes/:id
// @access  Private
const updateQuote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update quote ${req.params.id}` })
})

// @desc    Delete quote
// @route   DELETE /api/quotes/:id
// @access  Private
const deleteQuote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete quote ${req.params.id}` })
})

module.exports = {
  getQuotes,
  setQuote,
  updateQuote,
  deleteQuote,
}