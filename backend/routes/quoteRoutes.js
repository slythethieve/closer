const express = require('express')
const router = express.Router()
const { getQuotes, setQuote, updateQuote, deleteQuote} = require('../controllers/quoteController')




router.route('/').get(getQuotes).post(setQuote)
router.route('/:id').delete(deleteQuote).put(updateQuote)

module.exports = router