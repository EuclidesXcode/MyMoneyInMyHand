const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const allowCors = require('./cors')

const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(allowCors)

app.listen(port, function() {
    console.log(`API Online na porta ${port}`)
})

module.exports = app