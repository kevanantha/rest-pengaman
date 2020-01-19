const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const PORT = process.env.PORT || 3000

const app = express()

mongoose
  .connect('mongodb://localhost:27017/rest-pengaman', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(_ => console.log('Connected to DB'))
  .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(PORT, _ => console.log(`Server runs on PORT ${PORT}`))
