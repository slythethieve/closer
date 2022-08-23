const express = require('express')
const router = express.Router()
const { getQuotes, setQuote, updateQuote, deleteQuote} = require('../controllers/quoteController')
const {protect} = require('../middleware/authMiddleware')



router.route('/').get(protect, getQuotes).post(protect, setQuote)
router.route('/:id').delete(protect, deleteQuote).put(protect, updateQuote)

module.exports = router