

const express = require("express");

const app = express()
var cors = require('cors')

app.use(cors());


const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from index route')
})


app.get('/protected', (req, res) => {
  res.send('Hello from protected route!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})