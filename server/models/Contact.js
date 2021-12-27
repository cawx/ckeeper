const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    }
})