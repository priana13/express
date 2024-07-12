const express = require('express')
const app = express()
const port = 3000



app.get('/', function (req, res) {

  // res.status(500).json({ error: 'message' })

  res.sendFile('./pages/index.html', {
    root: __dirname
  });

})


app.get('/about', function (req, res) {

  res.sendFile('./pages/about.html', {
    root: __dirname
  });

})

app.get('/kontak', function (req, res) {

  res.sendFile('./pages/kontak.html', {
    root: __dirname
  });

})
app.get('/produk/:id', function (req, res) {

  res.send('Produk Id:' + req.params.id);

  // res.sendFile('./pages/kontak.html', {
  //   root: __dirname
  // });

})


// semacam midlleware jika user mengakses halaman yang tidak ada
app.use('/', (req, res) =>{

  res.status(404);

  res.send('<h1">NotFound | 404</h1 >');

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
