const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    clientInfo: {
        type: Array
    },
    products: {
        type: Array
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema)