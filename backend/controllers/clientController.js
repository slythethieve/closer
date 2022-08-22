const asyncHandler = require('express-async-handler')
const Client = require('../models/clientInfoModel')

const Quote = require('../models/quoteModel')

// @desc    Get clients
// @route   GET /api/clients
// @access  Private
const getClients = asyncHandler(async (req, res) => {
    const clients = await Client.find()
    res.status(200).json(clients)
})

// @desc    Set client
// @route   POST /api/clients
// @access  Private
const setClient = asyncHandler(async (req, res) => {
  if (!req.body.firstName) {
    res.status(400)
    throw new Error('Please add a name')
  }

  const client = await Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
})

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private
const updateClient = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Client ${req.params.id}` })
})

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private
const deleteClient = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete client ${req.params.id}` })
})

module.exports = {
  getClients,
  setClient,
  updateClient,
  deleteClient,
}