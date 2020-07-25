const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/databse', { useNewUrlParser: true })

// Traduções de erros
mongoose.Error.messages.general.required = "O Atributo `{PATH}` é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo `{PATH}`."