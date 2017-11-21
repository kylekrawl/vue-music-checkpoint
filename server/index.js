var express = require('express')
var server = express()
var cors = require('cors')
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var port = 3000

//route variables
var myTunesRoutes = require('./routes/mytunes-routes')

//register Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))

///register routes
server.use(myTunesRoutes)

server.listen(port, function(){
    console.log('Server running on port ', port)
})