const express = require('express')
const mongoose = require('mongoose')
const authRoute = require('./routes/user')
const PORT = process.env.PORT || 3000
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/', authRoute)

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

