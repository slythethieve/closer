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

const quoteModel = mongoose.Model('quoteModel', quoteSchema)
export default quoteModel