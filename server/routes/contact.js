const contact = require('../controllers/contact')
const router = require('express').Router()

router.post('/addcontact', contact.addcontact)

module.exports = router