const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    const token = req.header.Authorization
    if(!token) {
        return res.status(401).json({ message: 'Where the token at?' })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch(err) {
        res.status(400).json({ message: 'Invalid token' })
    }
}