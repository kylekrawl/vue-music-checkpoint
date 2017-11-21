var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

/*
Dummy playlist JSON object for testing:

{
    "name": "Test Playlist"
}

*/

var schema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Playlist', schema)