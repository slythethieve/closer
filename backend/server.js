const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))



app.use('/api/quotes', require('./routes/quoteRoutes'))
app.use('/api/clients', require('./routes/clientRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))