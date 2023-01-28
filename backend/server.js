const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const {errorHandler} = require('./middlewares/errorMiddleware')

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes)
app.use(errorHandler)

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
