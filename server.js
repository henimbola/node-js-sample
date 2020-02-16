let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req, res) => {

  res.writeHead(200);
  res.end('Hi Everyone');
});

server.listen(8080);
