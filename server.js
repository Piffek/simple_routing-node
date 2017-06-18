var http = require('http');
var app = require('./app.js');

http.createServer(app.handleRequest).listen(80);