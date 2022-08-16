const mongoose = require('mongoose')

const clientInfoSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    }
})