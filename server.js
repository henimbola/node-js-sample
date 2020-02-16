var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l accueil');
})

.get('/name/:name', (req, res) => {
  res.render('templates/display-name.ejs', {name: req.params.name});
})

.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('404 !! Page not found.');
});

app.listen(8080);
