const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.status(200)
  res.send('Hi')
})

app.listen(PORT, () => {
  console.log('App Is Listening on PORT:', PORT)
})
