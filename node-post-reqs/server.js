//Fill in vars here
var http = require('http')/* Missing require statment */
var url = require('url')
var fs = require('fs')

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;

  if (request.method === 'POST') {
    if (path === '/hifive') {
      // response.statusCode = 200
      // response.writeHead(200, { 'Content-Type': 'image/jpg' });
      // response.setHeader('Content-Type', 'text/plain');

      // response.writeHead(200);
      fs.readFile(__dirname + '/assets/hifive.jpg', function (err, data) {
        if (err) console.log(err);
        response.end(data);
      });
    } else if (path === '/lowfive') {
      fs.readFile(__dirname + '/assets/lowfive.jpg', function (err, data) {
        if (err) console.log(err);
        // response.writeHead(200);
        response.end(data);
      });
    } else {
      response.end(404);
    }
  } else if (request.method === 'GET') {
    if (path === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) console.log(err);
        response.end(data);
      });
    }
  } else {
    response.end(404);
  }

}).listen(4568, '127.0.0.1');

console.log('Listening...');
