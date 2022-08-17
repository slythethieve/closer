const mongoose = require('mongoose')

const clientInfoSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    homeAdressStreet: {
        type: String,
        required: [true, 'Please enter an adress']
    },
    homeAdressNumber: {
        type: Number,
        required: [true, 'Please enter a the house number']
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
        type: String
    }
})