const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    clientInfo: {
        type: Object
    },
    products: {
        type: Object
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema)