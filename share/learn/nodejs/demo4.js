var mock = require('mockjs');

var data = mock.mock({
  'id:+1':100,
  'number|1-100':1,
  "name":'@cname',
  "string|1-10": "★",
  "array|+1": [
   "AMD",
   "CMD",
   "UMD"
 ],
 "array1|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ],
  'regexp': /[a-z][A-Z][0-9]/,
  'regexp-number': /\d{5,10}/,
  'b':'@boolean',
  'integer':'@integer(3,5)',
  'str1':'@string(10)',
  'range1':'@range(2,10)',
  'date1':'@date',
  'date2':'@date("yyyy-MM-dd")',
  'time1':'@time(A HH:mm:ss)',
  'now1':'@now',
  'image1':'@image("200*100")',
  'text1':'@paragraph(2)',
  'text2':'@cparagraph',
  'tit1':'@title(2,5)',
  'tit2':'@ctitle',
  'w1':'@cword(3)',
  'name1':'@cname',
  'web1':'@url',
  'ip':'@ip',
  'address':'@region',
  'province':'@provice',
  'city':'@city',
  'city1':'@city(true)',
  'county':'@county',
  'county1':'@county(true)',
});

// var aa = Random.dataImage();

// mockjs参看 http://mockjs.com/examples.html


console.log(data);
