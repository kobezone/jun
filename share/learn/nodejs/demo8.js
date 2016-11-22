var http = require('http');
var fs = require('fs');

// http.get('http://192.168.0.4:9999/index.html',(res)=>{
//   console.log("${res.statusCOde}");
//   var input = fs.readFileSync('a.html');
//   res.write(input.pipe());
// }).on('error',function(err){
//   console.log(err);
// });
// Create an HTTP server
var srv = http.createServer( (req, res) => {
  // var is = fs.readFileSync('a.html');
  // res.write(is);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
}).listen(9999).on('error',function(err){
  console.log(err);
});
// http-server 可以充当静态资源服务器
// 使用node 先全局安装http-server
// * npm install http-server -g
// * cmd中切换到当前目录
// * 运行 http-server 即可
