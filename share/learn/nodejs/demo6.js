var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
  console.log("req");
  res.writeHeader(200);
  res.write('ok');
  var aa = fs.readFileSync('api.js');
  res.write(aa);
  res.end();
}).listen(9999).on('error',function(err){
  console.log(err);
})
