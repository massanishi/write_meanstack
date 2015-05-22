var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World');
	res.end();
}).listen(3000);

var express =require('express');
var app = express();

app.get('/', function(req, res){
	res.end(200, 'Hellowrodl')
});

app.listen(30000)