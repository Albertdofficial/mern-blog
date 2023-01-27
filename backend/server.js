const express = require('express')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

const app = express()

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.listen(process.env.PORT, (req, res)=>{
    console.log(`Listening on ${process.env.PORT}`);
})
app.use('/api/user', userRoutes)