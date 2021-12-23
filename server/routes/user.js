const auth = require('../controllers/auth')

const router = require('express').Router()
// Register
router.post('/register', auth.register)
// Login
module.exports = router