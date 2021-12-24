const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.register = async(req, res) => {
    const { firstName, lastName, email, password } = req.body
    // console.log(req.body)
    // console.log(req.body.email)
    try {
        const exist = await User.findOne({ email: email })
        if(exist) throw Error('User with this e-mail already exists')
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
        res.status(400).json({ message: 'Register was unsuccessful' })
    }
}

exports.login = async(req, res) => {
    const { email, password } = req.body
    try {
        const exist = await User.findOne({ email: email })
        if(!exist) throw Error('Account with this e-mail does not exist')

        bcrypt.compare(password, exist.password, (err, res) => {
            if(err) {
                throw Error('Something went terribly wrong')
            } else if(res) {
               console.log('Login success!')
            } else {
               console.log('Passwords do not match')
            }
        })

        res.status(200).json({ message: 'Successful login' })
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
}