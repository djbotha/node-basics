/**
 * Created by Daniel on 2017/02/12.
 */
var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8000);