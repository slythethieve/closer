const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    clientInfo: {
        type: Object
    },
    products: {
        euroMoebelProducts: {
            products: {
                type: Object
            },
            status: {
                type: String,
                timestamps: true
            },
            isOrder: {
                type: String,
                timestamps: true
            }
            
        },
        goodlineeProducts: {
            products: {
                type: Object,
            },
            status: {
                type: String,
                timestamps: true
            },
            isOrder: {
                type: String,
                timestamps: true
            }
        }
        
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema)