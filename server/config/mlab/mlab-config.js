var mongoose = require('mongoose')
var connectionString = 'mongodb://admin:test00@ds040877.mlab.com:40877/vue-music-kk'

var connection = mongoose.connection

mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to database')
})