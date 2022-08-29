const asyncHandler = require('express-async-handler')
const Client = require('../models/clientModel')

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
  if (!req.body.firstName) {
    res.status(400)
    throw new Error('Please add a first name')
  }
  if (!req.body.lastName) {
    res.status(400)
    throw new Error('Please add a öast name')
  }
  if (!req.body.adress) {
    res.status(400)
    throw new Error('Please add the street')
  }
  if (!req.body.city) {
    res.status(400)
    throw new Error('Please add the city')
  }

  const client = await Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    adress: req.body.adress,
    PLZ: req.body.PLZ,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    quote: req.body.quote
  })
  res.status(200).json(client)
})

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private
const updateClient = asyncHandler(async (req, res) => {
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
const deleteClient = asyncHandler(async (req, res) => {
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
  getClients,
  setClient,
  updateClient,
  deleteClient,
}