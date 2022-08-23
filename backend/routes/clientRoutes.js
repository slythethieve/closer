const express = require('express')
const router = express.Router()
const { getClients, setClient, updateClient, deleteClient} = require('../controllers/clientController')
const {protect} = require('../middleware/authMiddleware')



router.route('/').get(protect, getClients).post(protect, setClient)
router.route('/:id').delete(protect, deleteClient).put(protect, updateClient)

module.exports = router