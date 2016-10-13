// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log('Thank you for your valuable feedback:', answer);

//   rl.close();
// });

// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');
// 'use strict'
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

'use strict'
const fs = require('fs');
console.log(fs);
fs.readFile('note.md',(err,data)=>{
	if(err) throw err;
	console.log(typeof data);
	console.log(data.toString());
})

// 写文件
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

const http = require('http');
http.get("http://baidu.com",(res)=>{
	console.log(res);
	fs.writeFile("baidu.txt",res.toString(),function(err){
		if(err) console.log(err);
	})
})