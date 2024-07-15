const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

// gunakan ejs template engine
app.set('view engine', 'ejs');
// app.set('views', './pages');

app.use(expressLayouts);

app.get('/', function (req, res) {

  // res.status(500).json({ error: 'message' })

  // res.sendFile('./pages/index.html', {
  //   root: __dirname
  // });

  const contact = [{
                    nama: 'Priana',
                    hp : "089544555"
                  }];

  res.render('index', {
    layout : 'layouts/main-layouts',
    judul : 'Home'
  });

})


app.get('/about', function (req, res) {

  // res.sendFile('./pages/about.html', {
  //   root: __dirname
  // });

  res.render('about',{
    layout : 'layouts/main-layouts',
    judul : 'About'
  });


})

app.get('/kontak', function (req, res) {

  // res.sendFile('./pages/kontak.html', {
  //   root: __dirname
  // });
  res.render('kontak', {
    layout : 'layouts/main-layouts',
    judul : 'Kontak'
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
