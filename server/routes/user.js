const auth = require('../controllers/auth')
const router = require('express').Router()

// Register
router.post('/register', auth.register)
// Login
router.post('/login', auth.login)

module.exports = router