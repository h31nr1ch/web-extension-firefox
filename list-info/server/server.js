// var net = require('net');
//
// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
// });
//
// server.listen(1337, '127.0.0.1');

//http://www.java2s.com/Tutorials/Javascript/Node.js_Tutorial/1800__Node.js_HTTP.htm

var http = require('http');

var server = http.createServer(function (request, response) {
    response.write('bot online');
    response.end();
});

server.listen(3000,'127.0.0.1');
