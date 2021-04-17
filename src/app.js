const express = require('express')
const app = express()
const cors = require('cors')
// Settings

app.set('port',process.env.PORT || 4000)

// middlewares

app.use(cors())
app.use(express.json())

// Routes

app.use('/api/form',require('./routes/form'))
app.get('/',(req,res)=>res.send('hello'))

module.exports=app