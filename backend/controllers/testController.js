const asyncHandler = require('express-async-handler')
//const Client = require('../models/clientModel')
const Test = require('../models/testModel')
//const Quote = require('../models/quoteModel')

// @desc    Get clients
// @route   GET /api/clients
// @access  Private
const getTest2 = asyncHandler(async (req, res) => {
    const test = await Test.find()
    res.status(200).json(test)
})

// @desc    Set client
// @route   POST /api/clients
// @access  Private
const setTest2 = asyncHandler(async (req, res) => {

  const test = await Test.create({
    clientInfo: req.body.clientInfo,
    products: req.body.products
  })
  res.status(200).json(test)
})

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private
const updateTest2 = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id)
  if(!client) {
    res.status(400)
    throw new Error('Client not found')
  }

  const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new:true
  })
  res.status(200).json(updatedClient)
  
})

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private
const deleteTest2 = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id)
  if(!client) {
    res.status(400)
    throw new Error('Client not found')
  }
  await client.remove()
  res.status(200).json({
    id: req.params.id
  })
})

module.exports = {
  getTest2,
  setTest2,
  updateTest2,
  deleteTest2,
}