var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Song', schema)