var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('hello node serversdf');
}).listen(8001);

console.log('server running on port 8001');