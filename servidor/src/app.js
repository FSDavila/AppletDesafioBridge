import https from 'https'
import fs from 'fs'
import path from 'path'

import express from 'express'
import bodyParser from 'body-parser'

import obtemDados from './dados'

var bodyParser1 = require('body-parser')

const certificados = {
  key: fs.readFileSync(path.resolve(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../cert/cert.pem'))
}

const port = 3000

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../publico')))


/* app.get('/valores', (req, res) => {
    let input = obtemDados(7)
    console.log(req.body)
    setTimeout(() => res.json(input), 2000)
}) */

app.post('/valores', (req, res) => {
    let input = obtemDados(req.body.number)
    console.log(input)
    setTimeout(() => res.json(input), 2000)
})

const server = https.createServer(certificados, app)

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Servidor online na porta ${port}`))
