const express = require('express')
const mongoose = require('mongoose')
const authRoute = require('./routes/user')
const contactRoute = require('./routes/contact')
const jwtAuth = require('./middleware/jwtauth')
const cors = require('cors')
const PORT = process.env.PORT || 3001
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/', authRoute)
app.use('/contact', contactRoute)

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })

