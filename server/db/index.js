const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/list')

module.exports = db
