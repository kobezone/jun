'use strict'
var util =require('util')
var v8 =require('v8')
// console.dir(global);
// console.log(new Date());
// console.dir(Date());
// try{
// console.time('time1');
// let sum = 0;
// for(var i=0;i<100000;i++){
// 	sum =sum+ i;
// }
// console.log(sum);
// console.dir(new Date());
// console.timeEnd('time1');
// }catch(err){
// 	console.log(err);
// }


//node
//node  aa.js  1>info.txt  (1代表重定向输出流到 info.txt)
util.log("aaaaaaaa");
// console.log(util);
console.log(v8);
var aa = v8.getHeapStatistics();
console.log(aa);

