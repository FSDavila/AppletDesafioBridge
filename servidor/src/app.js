import https from 'https'
import fs from 'fs'
import path from 'path'

import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

import obtemDados from './dados'

const certificados = {
  key: fs.readFileSync(path.resolve(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../cert/cert.pem'))
}

const port = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../publico')))

var instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar' }
});


app.post('/valores', (req, res) => {
   console.log(req.body.number)
    /* let input = obtemDados(req.body.number)
    console.log(input) 
    setTimeout(() => res.json(obtemDados(req.body.number)), 2000) */
    console.log(obtemDados(req.body.number))
    setTimeout(() => res.json(obtemDados(req.body.number)), 2000)
})


const server = https.createServer(certificados, app)

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Servidor online na porta ${port}`))
