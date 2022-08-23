const mongoose = require('mongoose')


const quoteSchema = mongoose.Schema({
    
    totalPrice: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model('Quote', quoteSchema)