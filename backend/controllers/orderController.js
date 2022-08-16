const asyncHandler = require('express-async-handler')

// @desc    Get orders
// @route   GET /api/orders
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get orders' })
})

// @desc    Set order
// @route   POST /api/orders
// @access  Private
const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Set order' })
})

// @desc    Update order
// @route   PUT /api/orders/:id
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update order ${req.params.id}` })
})

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Private
const deleteOrder = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete order ${req.params.id}` })
})

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
}