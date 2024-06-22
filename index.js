const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Konfigurasi koneksi ke database MySQL
const connection = mysql.createConnection({
  host: 'localhost', // ganti dengan host MySQL Anda
  user: 'root',      // ganti dengan user MySQL Anda
  password: 'root',  // ganti dengan password MySQL Anda
  database: 'express' // ganti dengan nama database MySQL Anda
});

// Endpoint untuk /page
app.get('/page', (req, res) => {


  const query = 'SELECT * FROM pages where id = 1';

  connection.query(query, (error, results) => {  

    res.json(results);

  });

});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});