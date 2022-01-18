const express = require('express')
const data = require('./accounts.json')
const app = express()
const port = 3000

const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const Joi = require('joi')

app.use(cors())

app.get('/accounts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send(data)
})

app.get('/accounts/:id', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send(data.filter(x => x.id == req.params.id))
})

app.post('/accounts', jsonParser, function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  const { body } = req;

  const schema = Joi.object().keys({
    accountId: Joi.number().integer().min(0).max(Number.MAX_SAFE_INTEGER).required(),
    createdAt: Joi.date().min('1-1-1974').max('now').required(),
    id: Joi.number().integer().min(0).max(Number.MAX_SAFE_INTEGER).required(),
    owner: Joi.string().alphanum().required(),
    published: Joi.boolean().allow(''),
    revenue: Joi.number().integer().min(0).max(Number.MAX_SAFE_INTEGER).allow(''),
    spend: Joi.number().integer().min(0).max(Number.MAX_SAFE_INTEGER).allow(''),
    title: Joi.string().alphanum().empty('').default('default value').allow(''),
    updatedAt: Joi.date().min('1-1-1974').max('now').allow(''),
    views: Joi.number().integer().min(0).max(Number.MAX_SAFE_INTEGER).allow('')
  })

  const result = schema.validate(body);
  
  const { value, error } = result; 
  const valid = error == null; 
  if (!valid) { 
    res.status(422).json({ 
      message: 'Invalid request', 
      data: body 
    }) 
  } 
  data.push(req.body)
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})