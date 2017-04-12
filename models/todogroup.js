const mongoose = require('mongoose')

let todogroupSchema = new mongoose.Schema({
  name: {
    type: String
  },
  color: String,
  todos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Todo' // Model
  }]
})

let Todogroup = mongoose.model('Todogroup', todogroupSchema)

module.exports = Todogroup
