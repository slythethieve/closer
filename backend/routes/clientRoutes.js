const express = require('express')
const router = express.Router()
const { getClients, setClient, updateClient, deleteClient} = require('../controllers/clientController')




router.route('/').get(getClients).post(setClient)
router.route('/:id').delete(deleteClient).put(updateClient)

module.exports = router