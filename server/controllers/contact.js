const  mongoose = require('mongoose')
const Contact = require('../models/Contact')

exports.addcontact = async(req, res) => {
    const { user, name, email, phone } = req.body
    try {
        console.log('ADD CONTACT DATA')
        console.log(req.body)
        const newContact = new Contact({
            user,
            name,
            email,
            phone
        })
        const savedContact = await newContact.save()
        if(!savedContact) throw Error('Error saving contact')
        res.status(200).json({ message: 'Contact try success' })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getcontact = async(req, res) => {
    const { user } = req.query
    const contacts = await Contact.find({user: user})
    res.status(200).send(contacts)
}

exports.deletecontact = async(req, res) => {
    const { contactid } = req.query
    try {
        const contact = await Contact.deleteOne({_id: contactid})
        if(!contact) throw Error('Contact with this id does not exist')
        res.status(200).json({ message: 'Contact has been deleted' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
