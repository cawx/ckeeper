const contact = require('../controllers/contact')
const router = require('express').Router()

router.post('/addcontact', contact.addcontact)
router.get('/getcontact', contact.getcontact)
router.delete('/deletecontact', contact.deletecontact)
router.put('/editcontact', contact.editcontact)

module.exports = router