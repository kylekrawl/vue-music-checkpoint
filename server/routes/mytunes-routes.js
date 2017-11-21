var Songs = require('../models/song')
var router = require('express').Router()

// GET all mytunes songs
router.get('/api/songs/', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET mytunes song at specific id
router.get('/api/songs/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET all mytunes songs at specific playlist id
router.get('/api/playlists/:playlistId/songs', (req, res, next) => {
    Songs.find({ playlistId: req.params.playlistId })
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET all mytunes playlists
router.get('/api/playlists/', (req, res, next) => {
    Songs.find({})
        .then(playlists => {
            res.send(playlists)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// GET mytunes playlist at specific id
router.get('/api/playlists/:playlistId', (req, res, next) => {
    Songs.findById(req.params.playlistId)
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// POST new song to mytunes
router.post('/api/songs/', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// DELETE song from mytunes
router.delete('/api/songs/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            song.remove()
            res.send({ message: 'Song successfully deleted.' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// PUT mytunes song to edit rank
// need to rewrite to target specific playlist?
router.put('/api/songs/:id', (req, res, next) => {
    Songs.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.send('Song successfully updated.')
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

module.exports = router