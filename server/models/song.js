var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    albumPrice: { type: String, required: true },
    preview: { type: String, required: true },
    fileType: { type: String, required: true },
    genre: { type: String, required: true },
    playlistId: { type: ObjectId, required: true }
    
})

module.exports = mongoose.model('Song', schema)