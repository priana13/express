const express = require('express')
const app = express()
const port = 3000



app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/about', function (req, res) {
  res.send('Halaman About')
})

app.get('/kontak', function (req, res) {
  res.send('Halaman Kontak')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
