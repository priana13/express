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


// semacam midlleware jika user mengakses halaman yang tidak ada
app.use('/', (req, res) =>{

  res.status(404);

  res.send('<h1">NotFound | 404</h1 >');

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
