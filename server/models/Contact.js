const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact