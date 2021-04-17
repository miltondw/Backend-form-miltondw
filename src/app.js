const express = require('express')
const app = express()
const cors = require('cors')
// Settings

app.set('port',process.env.PORT || 4000)

// middlewares

app.use(cors())
app.use(express.json())

// Routes

app.use('https://miltondw.herokuapp.com/api/form',require('./routes/form'))

module.exports=app