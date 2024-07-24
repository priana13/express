const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

const { loadContact , findContact , wrireContact } = require('./utils/contacts');


// gunakan ejs template engine
app.set('view engine', 'ejs');
// app.set('views', './pages');

app.use(expressLayouts);

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Aplication lervel Middleware 
app.use((req, res, next) => {

  console.log('Time ' + Date.now());

  next();

});



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

  const list_contact = loadContact();

  // console.log( list_contact);



  // res.sendFile('./pages/kontak.html', {
  //   root: __dirname
  // });
  res.render('kontak', {
    layout : 'layouts/main-layouts',
    judul : 'Kontak',
    list_contact
  });


})

app.get('/kontak/tambah', function (req, res) {

  
  res.render('tambah', {
    layout : 'layouts/main-layouts'    
  });

});

app.post('/kontak/tambah', function (req, res) {
  
  const data = req.body;

 
  console.log(data);

  wrireContact(data.nama, data.hp);

  res.redirect( '/kontak' );


})


app.get('/kontak/:nama', function (req, res) {

  const nama = req.params.nama;

  const contact = findContact(nama);


  res.render('detail', {
    layout : 'layouts/main-layouts',
    contact
  });

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
