const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 2500;

app.set('view engine', 'ejs');

app.get('/vista', function(req, res){
    res.render('vista');
});

app.get('/', (req, res) => {
  res.send('Probando');
});

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
});

