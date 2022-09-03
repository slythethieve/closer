const express = require('express')
const router = express.Router()
const { getTest2, setTest2, updateTest2, deleteTest2} = require('../controllers/testController')
const {protect} = require('../middleware/authMiddleware')



router.route('/').get(getTest2).post( setTest2)
router.route('/:id').delete(protect, deleteTest2).put(protect, updateTest2)

module.exports = router