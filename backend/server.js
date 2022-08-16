const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()


app.get('/api/orders', (req, res) => {
    res.json({
        message: "Get orders"
    })
})

app.listen(port, () => console.log(`Server started on port ${port}`))