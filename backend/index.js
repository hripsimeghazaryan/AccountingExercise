const express = require('express')
const data = require('./accounts')
const app = express()
const port = 3000

var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(cors())

app.get('/accounts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send(data.accounts)
})

app.get('/accounts/:id', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send(data.accounts.filter(x => x.id == req.params.id))
})

app.post('/accounts', jsonParser, function (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  data.accounts.push(req.body)
  res.send(data.accounts);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})