'use strict'

const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    res.end('<h1>My First Node.js Web Server</h1>')
})
server.listen(8080)
