
var _ = require('lodash');
var clients = [];
var ws = require('ws');

exports.connect = function(server){
	var wss = new ws.Server({server: server});
	wss.on('connection', function(ws){
		clients.push(ws);

		exports.broadcast('new client joined');

		ws.on('close', function(){
			_.remove(clients, ws);
		})

		console.log('im here');
		ws.send('hello!')
	})
}

exports.broadcast = function(topic, data){
	var json = JSON.stringify({topic: topic, data: data})
	clients.forEach(function(client){
		client.send(json);
	})
}