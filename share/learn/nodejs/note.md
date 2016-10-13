### node学习笔记
Node 是一个服务器端 JavaScript 解释器.
Node核心思想：　　1.非阻塞；　　2.单线程；　　3.事件驱动。
node 是无阻塞的, 请求到达服务器时 node服务器就开始处理请求
node 更擅长处理体积小的请求以及基于事件的I/O
node 不仅仅是一个web服务器框架 它可以做很多服务 如socket服务 基于文件的服务

node 事件驱动
```javascript
var event = require('events');
var emitter = new events.EventEmitter();
emitter.on('myEvent',function(msg){
    console.log(msg);
})

//调用事件
emitter.emit('myEvent','hello world');

```



* nodejs 的内置的模块 api  fs http 等api的熟悉和功能是的直接使用
* npm  安装node生态的包  如 express 服务器  ejs  socket.io lodash moment connnet later log4js 等工具 模块 包的应用和使用等






> 参考  
> 1.[Nodejs学习路线图](http://www.jianshu.com/p/659550e2884a)
> 2.[nodejs 学习日志](http://www.jianshu.com/p/b6a8261796ce)
