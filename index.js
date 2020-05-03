'use strict'

const express = require('express')
const path = require('path')

process.on('uncaughtException', err => {
  console.log('Uncaught Exception: ' + err)
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

const server = express()

server.use(express.static(path.join(__dirname, 'packages/frontend', 'build')))

server.get('*', function(req, res) {
  server.set('trust proxy', 1)
  server.set('x-powered-by', false)
  res.sendFile(path.join(__dirname + '/packages/frontend/build', 'index.html'))
});

server.listen(port, host)
