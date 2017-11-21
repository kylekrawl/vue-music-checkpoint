var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

/*
Dummy song JSON object for testing:

{
    "title": "Test Song",
    "albumArt": "some-url",
    "artist": "Portishead",
    "album": "Dummy",
    "albumPrice": "10.00",
    "preview": "some-url",
    "fileType": "song",
    "genre": "none",
    "playlistId": ""
    "rank: 0"
}

*/

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    albumPrice: { type: String, required: true },
    preview: { type: String, required: true },
    fileType: { type: String, required: true },
    genre: { type: String, required: true },
    playlistId: { type: ObjectId, required: true },
    rank: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('Song', schema)