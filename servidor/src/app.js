import https from 'https'
import fs from 'fs'
import path from 'path'

import express from 'express'

import obtemDados from './dados'

const certificados = {
  key: fs.readFileSync(path.resolve(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../cert/cert.pem'))
}

const port = 3000
var bodyParser = require('body-parser')
const app = express()
app.use(express.static(path.resolve(__dirname, '../publico')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/valores', (req, res) => {
    let input = req.body
    let valores = obtemDados(input)
    console.log(input)
    setTimeout(() => res.json(valores), 2000)
})

const server = https.createServer(certificados, app)

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Servidor online na porta ${port}`))
