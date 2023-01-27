const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

const app = express()


app.listen((req, res)=>{
    console.log(`Listening on ${process.env.PORT}`);
})
app.use('/api/user', userRoutes)