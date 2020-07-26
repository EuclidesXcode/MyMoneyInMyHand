const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(allowCors)
app.use(queryParser())

app.listen(port, function() {
    console.log(`API Online na porta ${port}`)
})

module.exports = app