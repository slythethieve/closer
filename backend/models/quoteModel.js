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
                default: "offer"
            },
            isOrder: {
                type: Boolean,
                default: true
            }
            
        },
        goodlineeProducts: {
            products: {
                type: Object,
            },
            status: {
                type: String,
                default: "offer"
            },
            isOrder: {
                type: Boolean,
                default: true
            }
        }
        
    },
    date: {
        type: Date,
        default: Date.now,
        
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Quote', quoteSchema)