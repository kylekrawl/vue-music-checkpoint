var Songs = require('../models/song')
var Playlists = require('../models/playlist')
var router = require('express').Router()

//////////////////////////////////////////
// Single Playlist (MyTunes)
//////////////////////////////////////////

// GET all mytunes songs
router.get('/api/mytunes/', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET mytunes song at specific id
router.get('/api/mytunes/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// POST new song to mytunes
router.post('/api/mytunes/', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// DELETE song from mytunes
router.delete('/api/mytunes/:songId', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.songId)
        .then(() => {
            res.send({ message: '! DELETE FROM DATABASE: ! Song successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// PUT mytunes song to edit rank
router.put('/api/mytunes/:songId', (req, res, next) => {
    Songs.findByIdAndUpdate(req.params.songId, req.body)
        .then(() => {
            res.send('Song successfully updated.')
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


//////////////////////////////////////////
// Multiple Playlists
//////////////////////////////////////////

/*
// GET all mytunes songs at specific playlist id
router.get('/api/playlists/:playlistId/songs', (req, res, next) => {
    Songs.find({ playlistId: req.params.playlistId })
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET all mytunes playlists
router.get('/api/playlists/', (req, res, next) => {
    Playlists.find({})
        .then(playlists => {
            res.send(playlists)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET mytunes playlist at specific id
router.get('/api/playlists/:playlistId', (req, res, next) => {
    Playlists.findById(req.params.playlistId)
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// POST new playlist to mytunes
router.post('/api/playlists/', (req, res, next) => {
    Playlists.create(req.body)
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})
*/

module.exports = router