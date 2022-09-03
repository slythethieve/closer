const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
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

module.exports = mongoose.model('Test', testSchema)