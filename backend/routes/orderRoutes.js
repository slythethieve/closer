const express = require('express')
const router = express.Router()
const { getOrders, setOrder, updateOrder, deleteOrder} = require('../controllers/orderController')




router.route('/').get(getOrders).post(setOrder)
router.route('/:id').delete(deleteOrder).put(updateOrder)

module.exports = router