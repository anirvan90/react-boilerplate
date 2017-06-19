const mongoose = require('mongoose')
require('../index.js')

const listSchema = mongoose.Schema({
  item: String
})

const List = mongoose.model('List', listSchema)
module.exports = List
