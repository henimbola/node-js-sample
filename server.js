
//Importations des besoins
let http = require('http');
let fs = require('fs');
let url = require('url');

//Creation du serveur
let server = http.createServer((req, res) => {

  //Ouverture du fichier à lire
  fs.readFile('index.html',(err, data) => {

    if (err) throw err;

    res.writeHead(200, {
      "Content-Type" : "text/html ; charset=utf-8"
    });

    res.end(data);
    console.log('Requête');

  })


});


server.listen(8080);
