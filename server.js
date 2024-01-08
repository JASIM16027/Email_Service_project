const express = require('express')
const sendEmail = require('./service/sendEmail');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000;

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to node js')
})

app.post('/sendEmail', sendEmail)

app.listen(PORT, () => {
    console.log(` Server is listening to Port ${PORT}`)
})



