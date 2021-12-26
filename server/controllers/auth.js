const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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
        User.findOne({ email: email })
        .then(user => {

            if (!user) return res.status(400).json({ message: "User does not exist" })

            bcrypt.compare(password, user.password, (err, data) => {
                if (err) throw err
                if (data) {
                    const userData = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email
                    }
                    const token = jwt.sign(userData, process.env.JWT_SECRET)
                    if(!token) throw Error('Something went terribly wrong..')
                    user.token = token
                    return res.status(200).json({ message: "Login success" })
                } else {
                    return res.status(401).json({ message: "Wrong password" })
                }

            })

        })
        
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
}