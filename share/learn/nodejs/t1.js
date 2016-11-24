'use strict'
console.log(Object);
// console.log('1111');
let a = [{
  a: 1,
  b: 2
}, {
  c: 1,
  d: 2,
  a: 3
}];
let b = a.map(x => {
  return {
    a: x.a,
    data: x
  }
})

let result = b.sort(function(a, b) {
  console.log(a.a - b.a);
  return a.a - b.a;
})

console.log('b', b);
console.log(result, null, 2);

console.log('end');
var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(i);
}
let flag = arr.some(x => {
  return x > 5;
})
let barr = arr.reduce((x, y) => {
  return x + y + 1;
})
console.log(`${barr}`);
