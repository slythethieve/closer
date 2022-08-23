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

  //TODO: Test if this really makes a difference having it. 
  // I think it is needed to send out an error from our end instead 
  // of the database maybe. 
  //if (!req.body.firstName) {
  //  res.status(400)
  //  throw new Error('Please add a name')
  //}

  const client = await Client.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    homeAdressStreet: req.body.homeAdressStreet,
    homeAdressNumber: req.body.homeAdressNumber,
    PLZ: req.body.PLZ,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
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
  res.status(200).json({ message: `Delete client ${req.params.id}` })
})

module.exports = {
  getClients,
  setClient,
  updateClient,
  deleteClient,
}