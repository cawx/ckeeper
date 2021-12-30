const contact = require('../controllers/contact')
const router = require('express').Router()

router.post('/addcontact', contact.addcontact)
router.get('/getcontact', contact.getcontact)

module.exports = router