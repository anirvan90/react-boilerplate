const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000
const List = require('./db/models/List.js')
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/list', (req, res) => {
  List.find().then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    console.error('Error Fetching List')
    res.status(501).send(err)
  })
})

app.post('/list', (req, res) => {
  let listItem = {
    item: req.body.item
  }
  new List(listItem).save()
  .then((data) => {
    res.status(201).send(data)
  })
  .catch((err) => {
    console.error('Error Saving Item')
    res.status(501).send(err)
  })
})

app.listen(PORT, () => {
  console.log('App Is Listening on PORT:', PORT)
})
