const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    adress: {
        type: String,
        required: [true, 'Please enter an adress']
    },
    PLZ: {
        type: Number
    },
    city: {
        type: String,
        required: [true, 'Please enter the client city']
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email adress'],
    },
    quotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quote'
    },
    
})

module.exports = mongoose.model('Client', clientSchema)