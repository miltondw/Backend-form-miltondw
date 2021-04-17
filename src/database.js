const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
            ?process.env.MONGODB_URI
            :'mongodb://localhost/dbdefault'

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    ssl: { "rejectUnauthorized": false }
})

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('DB is connection')
  
})
