const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.register = async(req, res) => {
    const { firstName, lastName, email, password } = JSON.parse(JSON.stringify(req.body))
    console.log(req.body)
    const exist = User.findOne({ email })
    if(exist) throw Error('User with this e-mail already exists')
    try {
        const hash = await bcrypt.hash(password, 10)
        if(!hash) throw Error('Something went terribly wrong..')

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hash
        })

        const savedNewUser = await newUser.save()
        if(!savedNewUser) throw Error('Something went terribly wrong...')
        res.status(200).json({ message: 'Register successful' })
    } catch(e) {
        res.status(400).json({ message: e })
    }
    const hash = await bcrypt.hash(req.body.password, 10)
}