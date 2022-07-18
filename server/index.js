const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

dotenv.config()
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected!!'))
  .catch((err) => {
    console.log(err)
  })

//to help post route with json file
app.use(express.json())

app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log('Server running!!')
})
